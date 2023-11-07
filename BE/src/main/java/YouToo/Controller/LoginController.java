package YouToo.Controller;

import YouToo.Member.Member;
import YouToo.Service.LoginService;
import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletResponse;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
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
    public ResponseEntity<String> localLogin(@RequestBody Member member, HttpServletResponse response) {
        boolean loginSuccess = loginService.localLogin(member);
        if (loginSuccess) {
            log.info("로그인 성공");
            // 쿠키에 시간 정보를 주지 않으면 세션 쿠키(브라우저 종료시 모두 종료)
            Cookie idCookie = new Cookie("memberId", String.valueOf(member.getUserEmail()));
            // response에 쿠키 정보를 담는다.
            // 쿠키의 이름은 memberId이고, 값은 회원의 id를 담아둔다.
            idCookie.setHttpOnly(true);
            idCookie.setSecure(true);
            idCookie.setAttribute("SameSite", "None");
            response.addCookie(idCookie);
            return ResponseEntity.ok("success");
        } else {
            log.warn("fail");
            return ResponseEntity.badRequest().body("로그인 실패");
        }
    }
}
