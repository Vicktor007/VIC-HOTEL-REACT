static getHeader() {
    const token = localStorage.getItem("token");
    const authProvider = localStorage.getItem("authProvider");
    return {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
        AuthProvider: authProvider // Add the role to the header
    };
}


String authHeader = request.getHeader("Authorization");
String AuthProvider = request.getHeader("AuthProvider");

if(authHeader == null || !authHeader.startsWith("Bearer ")) {
    filterChain.doFilter(request,response);
    System.out.println("not with bearer");
    return;
}

if(AuthProvider.equals("Google")) {
    
    String url = "https://www.googleapis.com/oauth2/v3/tokeninfo?access_token=" + token;
            RestTemplate restTemplate = new RestTemplate();
            GoogleTokenInfo tokenInfo = restTemplate.getForObject(url, GoogleTokenInfo.class);

            if (tokenInfo != null && tokenInfo.getEmail() != null) {
                User user = userRepository.findByEmail(tokenInfo.getEmail()).orElse(null);
                if (user != null) {

                 String accessToken = token;
                    System.out.println(accessToken);
}

// Inner class to map the token info response
public static class GoogleTokenInfo {
    private String email;

    // Getters and setters
    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }
}