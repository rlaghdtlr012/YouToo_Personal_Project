package YouToo.Member;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class Member {
    private Long id;
    
    private String userEmail;
    private String userPassword;
}
