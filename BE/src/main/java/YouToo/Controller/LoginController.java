package YouToo.Controller;

import YouToo.Member.Member;
import YouToo.Service.LoginService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@Slf4j
public class LoginController {

    private final LoginService loginService;

    @Autowired
    public LoginController(LoginService loginService) {
        this.loginService = loginService;
    }
    @PostMapping("/local-login")
    public ResponseEntity<String> localLogin(@RequestBody Member member) {
        boolean loginSuccess = loginService.localLogin(member);
        if (loginSuccess) {
            log.info("로그인 성공");
            return ResponseEntity.ok("로그인 성공");
        } else {
            log.warn("로그인 실패");
            return ResponseEntity.badRequest().body("로그인 실패");
        }
    }
}
