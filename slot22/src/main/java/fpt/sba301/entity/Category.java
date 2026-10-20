package fpt.sba301.entity;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Setter
@Getter
@AllArgsConstructor
@Table(name = "Category")
public class Category {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "CategoryID")
    private Short categoryId;
    @Column(name = "CategoryName", nullable = false, length = 100)
    private String categoryName;
    // Tên cột thật trong database Assignment 02 đang là CategoryDesciption.
    @Column(name = "CategoryDesciption", nullable = false, length = 250)
    private String categoryDescription;
    @Column(name = "ParentCategoryID")
    private Short parentCategoryId;
    @Column(name = "IsActive")
    private Boolean active;
    public Category() {}
    // Generate getters/setters bằng IDE.
}