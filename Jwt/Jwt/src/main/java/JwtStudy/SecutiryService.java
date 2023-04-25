package JwtStudy;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.springframework.stereotype.Service;

import javax.crypto.spec.SecretKeySpec;
import javax.xml.bind.DatatypeConverter;
import java.security.Key;
import java.util.Date;

@Service
public class SecutiryService {
    private static final String SECTET_KEY = "assdfjflsjfsolfjsjfsopasdadaqweqeadaasdaqweqvjdfiosjwjafdsaf";

    public String createToken(String subject, long expTime) {
        if (expTime <= 0) {
            throw new RuntimeException("만료시간이 0보다 커야됨");
        }

        SignatureAlgorithm signatureAlgorithm = SignatureAlgorithm.HS256;

        byte[] secreatKeyBytes = DatatypeConverter.parseBase64Binary(SECTET_KEY);
        Key signingKey = new SecretKeySpec(secreatKeyBytes, signatureAlgorithm.getJcaName());

        return Jwts.builder()
                .setSubject(subject)
                .signWith(signingKey, signatureAlgorithm)
                .setExpiration(new Date(System.currentTimeMillis() + expTime))
                .compact();
    }

//    token을 검증하는 메서드
    public String getSubject(String token){
        Claims claims = Jwts.parserBuilder()
                .setSigningKey(DatatypeConverter.parseBase64Binary(SECTET_KEY))
                .build()
                .parseClaimsJws(token)
                .getBody();
        return  claims.getSubject();
    }
}
