package vn.sapo.cucumber;

import io.cucumber.spring.CucumberContextConfiguration;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.web.WebAppConfiguration;
import vn.sapo.GoApp;

@CucumberContextConfiguration
@SpringBootTest(classes = GoApp.class)
@WebAppConfiguration
public class CucumberTestContextConfiguration {}
