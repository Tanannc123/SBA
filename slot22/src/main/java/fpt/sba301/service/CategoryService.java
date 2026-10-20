package fpt.sba301.service;

import fpt.sba301.dto.CategoryRequest;
import fpt.sba301.dto.CategoryResponse;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface CategoryService {
    Page<CategoryResponse> findAll(String keyword, Pageable pageable);
    CategoryResponse getById(short id);
    CategoryResponse create(CategoryRequest request);
    CategoryResponse update(short id, CategoryRequest request);
    void delete(short id);
}
