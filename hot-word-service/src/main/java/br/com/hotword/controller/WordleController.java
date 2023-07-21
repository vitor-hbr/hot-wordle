package br.com.hotword.controller;

import br.com.hotword.service.HotWordGeneratorService;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping(value = "/wordle")
public class WordleController {
    private static final Logger log = LogManager.getLogger(WordleController.class);

    @Autowired
    private HotWordGeneratorService hotWordGeneratorService;

    @GetMapping("/{numWords}/{numLetters}")
    public ResponseEntity<List<String>> get(@PathVariable String numWords, @PathVariable String numLetters) {
        List<String> words = hotWordGeneratorService.getWords(numLetters, numWords);

        return ResponseEntity.status(HttpStatus.OK).body(words);
    }
}
