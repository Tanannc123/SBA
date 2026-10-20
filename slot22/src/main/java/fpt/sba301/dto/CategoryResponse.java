package fpt.sba301.dto;
public record CategoryResponse(
        Short categoryId,
        String categoryName,
        String categoryDescription,
        Short parentCategoryId,
        Boolean active
) {}

