package YouToo;

import YouToo.Controller.LoginController;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.test.web.servlet.MockMvc;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@WebMvcTest(LoginController.class)
@DisplayName("로그인 요청 테스트")
public class LoginTests {

    @Autowired
    private MockMvc mockMvc;

    @Test
    @DisplayName("로컬 로그인 테스트")
    public void localLogin() throws Exception {
        mockMvc.perform(post("/local-login")).andExpect(status().isOk());
    }
}
