package JwtStudy.Security;

import JwtStudy.SecutiryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.LinkedHashMap;
import java.util.Map;

@RestController
@RequestMapping("/security")
public class secutiryController {
    @Autowired
    private SecutiryService secutiryService;

    @GetMapping("/create/token")
    public Map<String, Object> createToken(@RequestParam(value = "subject") String subject){
        String token = secutiryService.createToken(subject, (2*1800*60));
        Map<String, Object> map = new LinkedHashMap<>();
        map.put("result", token);
        return map;
    }

    @GetMapping("/get/subject")
    public Map<String, Object> getSubject(@RequestParam(value = "subject") String token) {
        String subject = secutiryService.getSubject(token);
        Map<String, Object> map = new LinkedHashMap<>();
        map.put("result", subject);
        return map;
    }

}
