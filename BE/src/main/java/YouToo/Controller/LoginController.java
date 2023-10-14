package YouToo.Controller;

import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(originPatterns = "http://localhost:8080")
@Slf4j
public class LoginController {

    @PostMapping("/local-login")
    public String localLogin() {
        log.info("localLogin Success");
        return "hello";
    }
}
