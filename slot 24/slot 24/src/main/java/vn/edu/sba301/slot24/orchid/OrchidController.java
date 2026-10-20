package vn.edu.sba301.slot24.orchid;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/orchids")
@Tag(name = "Orchids", description = "APIs for orchid management")
public class OrchidController {

    private final OrchidService orchidService;

    public OrchidController(OrchidService orchidService) {
        this.orchidService = orchidService;
    }

    @GetMapping
    @Operation(summary = "Get all orchids", description = "Retrieve a list of all orchids")
    public List<Orchid> findAll() {
        return orchidService.findAll();
    }

    @GetMapping("/{id}")
    @Operation(summary = "Get orchid by ID", description = "Retrieve a specific orchid by its ID")
    public Orchid findById(@Parameter(description = "Orchid ID") @PathVariable long id) {
        return orchidService.findById(id);
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    @Operation(summary = "Create a new orchid", description = "Create a new orchid record")
    public Orchid create(@Valid @RequestBody OrchidRequest request) {
        return orchidService.create(request);
    }

    @PutMapping("/{id}")
    @Operation(summary = "Update an orchid", description = "Update an existing orchid by its ID")
    public Orchid update(@Parameter(description = "Orchid ID") @PathVariable long id, @Valid @RequestBody OrchidRequest request) {
        return orchidService.update(id, request);
    }

    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    @Operation(summary = "Delete an orchid", description = "Delete an orchid by its ID")
    public void delete(@Parameter(description = "Orchid ID") @PathVariable long id) {
        orchidService.delete(id);
    }
}
