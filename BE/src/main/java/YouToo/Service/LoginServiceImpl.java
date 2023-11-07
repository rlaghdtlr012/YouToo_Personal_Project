package YouToo.Service;

import YouToo.Member.Member;
import YouToo.Member.MemberRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@Slf4j
@RequiredArgsConstructor
public class LoginServiceImpl implements LoginService{

    private final MemberRepository memberRepository;

    /**
     * desc: login 정보가 맞는지 틀린지 확인하는 로직
     * @return null이면 로그인 실패
     */
    public Member login(String loginId, String password) {
        Optional<Member> findMemberOptional = memberRepository.findByLoginId(loginId);
        Member member = findMemberOptional.get();
        if (member.getUserPassword().equals(password)) {
            return member;
        } else {
            return null;
        }
    }
    @Override
    public boolean localLogin(Member member) {
        log.info("login info={}", member);
        log.info("login ID={}", member.getUserEmail());
        log.info("login ID={}", member.getUserPassword());
        log.info("login result={}", "user1@naver.com".equals(member.getUserEmail()) && "1234!".equals(member.getUserPassword()));
        return "user1@naver.com".equals(member.getUserEmail()) && "1234!".equals(member.getUserPassword());
    }
}
