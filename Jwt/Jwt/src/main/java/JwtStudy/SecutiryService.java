package JwtStudy;

import io.jsonwebtoken.SignatureAlgorithm;
import org.springframework.stereotype.Service;

import javax.xml.bind.DatatypeConverter;

@Service
public class SecutiryService {
    private static final String SECTET_KEY = "assdfjflsjfsolfjsjfsopjdfiosjwjafdsaf";

    public String createToken(String subject, long expTime){
        if(expTime<=0){
            throw new RuntimeException("만료시간이 0보다 커야됨");
        }

        SignatureAlgorithm signatureAlgorithm = SignatureAlgorithm.HS256;

        byte[] secreatKeyBytes = DatatypeConverter.

    }

}
