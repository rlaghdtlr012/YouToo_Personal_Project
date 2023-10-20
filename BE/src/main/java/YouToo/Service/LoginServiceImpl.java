package YouToo.Service;

import YouToo.Member.Member;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

@Service
@Slf4j
public class LoginServiceImpl implements LoginService{

    @Override
    public boolean localLogin(Member member) {
        log.info("login info={}", member);
        log.info("login ID={}", member.getUserEmail());
        log.info("login ID={}", member.getUserPassword());
        log.info("login result={}", "user1@naver.com".equals(member.getUserEmail()) && "1234".equals(member.getUserPassword()));
        return "user1@naver.com".equals(member.getUserEmail()) && "1234".equals(member.getUserPassword());
    }
}
