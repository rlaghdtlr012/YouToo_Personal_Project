package YouToo.Controller;

import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@Slf4j
public class LoginController {

    @PostMapping("/local-login")
    public String localLogin() {
        log.info("localLogin Success");
        return "hello";
    }
}
