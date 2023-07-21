package br.com.hotword.service;
import java.io.BufferedReader;
import java.io.DataOutputStream;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;
import java.nio.charset.StandardCharsets;
import java.util.ArrayList;
import java.util.List;

import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;
import org.springframework.stereotype.Service;

@Service
public class HotWordGeneratorService {
    public List<String> getWords(String numLetters, String numWords) {
        String url = "https://www.invertexto.com/ajax/words.php";
        String requestBody = String.format("type=text&type=&num_words=%s&num_letters=%s&starts_with=&ends_with=", numWords, numLetters);
        List<String> wordList = new ArrayList<>();

        try {
            URL obj = new URL(url);
            HttpURLConnection con = (HttpURLConnection) obj.openConnection();

            // Configurando a requisição para o método POST
            con.setRequestMethod("POST");
            con.setRequestProperty("Content-Type", "application/x-www-form-urlencoded");
            con.setDoOutput(true);

            // Enviando o corpo da requisição
            try (DataOutputStream wr = new DataOutputStream(con.getOutputStream())) {
                wr.write(requestBody.getBytes(StandardCharsets.UTF_8));
            }

            // Lendo a resposta da requisição
            try (BufferedReader in = new BufferedReader(new InputStreamReader(con.getInputStream()))) {
                String inputLine;
                StringBuilder response = new StringBuilder();

                while ((inputLine = in.readLine()) != null) {
                    response.append(inputLine);
                }

                // Imprimindo a resposta
                System.out.println(response.toString());

                // Fazendo o parsing do JSON retornado
                JSONParser parser = new JSONParser();
                JSONObject jsonResponse = (JSONObject) parser.parse(response.toString());

                // Obtendo o valor da propriedade "word"
                // Obtendo a matriz "result"
                JSONArray resultArray = (JSONArray) jsonResponse.get("result");

                for (int x =  0; x < resultArray.size(); x++) {
                    // Obtendo o primeiro objeto dentro da matriz "result"
                    JSONObject firstResultObject = (JSONObject) resultArray.get(x);
//
                    // Obtendo o valor da propriedade "word" dentro do objeto
                    String word = (String) firstResultObject.get("word");
                    wordList.add(word);
                    System.out.println("A palavra é: " + word + " numero de palavras " + numWords + " numero de letras " + numLetters);
                }
//


            } catch (ParseException e) {
                throw new RuntimeException(e);
            }

        } catch (IOException e) {
            e.printStackTrace();
        }

        return wordList;
    }
}