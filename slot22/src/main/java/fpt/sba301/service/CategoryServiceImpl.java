package fpt.sba301.service;

import fpt.sba301.dto.CategoryRequest;
import fpt.sba301.dto.CategoryResponse;
import fpt.sba301.entity.Category;
import fpt.sba301.exception.BusinessConflictException;
import fpt.sba301.exception.ResourceNotFoundException;
import fpt.sba301.repository.CategoryRepository;
import jakarta.transaction.Transactional;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
public class CategoryServiceImpl implements CategoryService {
    private final CategoryRepository repository;
    public CategoryServiceImpl(CategoryRepository repository) {
        this.repository = repository;
    }
    @Override
    @Transactional(readOnly = true)
    public Page<CategoryResponse> findAll(String keyword, Pageable pageable) {
        Page<Category> page = (keyword == null || keyword.isBlank())
                ? repository.findAll(pageable)
                : repository.findByCategoryNameContainingIgnoreCase(keyword, pageable);
        return page.map(this::toResponse);
    }
    @Override
    @Transactional(readOnly = true)
    public CategoryResponse getById(short id) {
        return toResponse(findEntity(id));
    }
    @Override
    @Transactional
    public CategoryResponse create(CategoryRequest request) {
        if (repository.existsByCategoryNameIgnoreCase(request.categoryName())) {
            throw new BusinessConflictException("Category name already exists");
        }
        Category c = new Category();
        apply(c, request);
        return toResponse(repository.save(c));
    }
    @Override
    @Transactional
    public CategoryResponse update(short id, CategoryRequest request) {
        Category c = findEntity(id);
        apply(c, request);
        return toResponse(repository.save(c));
    }
    @Override
    @Transactional
    public void delete(short id) {
        Category c = findEntity(id);
        repository.delete(c);
    }
    private Category findEntity(short id) {
        return repository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Category " + id + " not found"));
    }
    private void apply(Category c, CategoryRequest r) {
        c.setCategoryName(r.categoryName().trim());
        c.setCategoryDescription(r.categoryDescription().trim());
        c.setParentCategoryId(r.parentCategoryId());
        c.setActive(r.active() == null ? Boolean.TRUE : r.active());
    }
    private CategoryResponse toResponse(Category c) {
        return new CategoryResponse(c.getCategoryId(), c.getCategoryName(),
                c.getCategoryDescription(), c.getParentCategoryId(), c.getActive());
    }
}
