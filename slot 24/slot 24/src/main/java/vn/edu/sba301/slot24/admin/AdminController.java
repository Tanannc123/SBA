package vn.edu.sba301.slot24.admin;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.security.SecurityRequirement;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@RestController
@Tag(name = "Admin", description = "Admin-only APIs")
public class AdminController {

    @GetMapping("/admin/health")
    @Operation(summary = "Admin health check", description = "Check if admin endpoint is accessible (requires ADMIN role)", security = @SecurityRequirement(name = "Bearer Authentication"))
    public Map<String, String> health() {
        return Map.of("status", "admin-only");
    }
}
