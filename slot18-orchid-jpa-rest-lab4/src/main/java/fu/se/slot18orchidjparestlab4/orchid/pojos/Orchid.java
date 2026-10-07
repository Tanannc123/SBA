package fu.se.slot18orchidjparestlab4.orchid.pojos;
import jakarta.persistence.*;
@Entity
@Table(name = "orchids")
public class Orchid {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long orchidID;
    @Column(nullable = false, length = 150)
    private String orchidName;
    private Boolean isNatural;
    @Column(length = 1000)
    private String orchidDescription;
    @ManyToOne(optional = false)
    @JoinColumn(name = "category_id", nullable = false)
    private OrchidCategory orchidCategory;
    private Boolean isAttractive;
    private String orchidURL;
    public Orchid() {}
    // Generate getters/setters with IntelliJ: Code > Generate

    public void setOrchidID(Long orchidID) {
        this.orchidID = orchidID;
    }

    public void setOrchidName(String orchidName) {
        this.orchidName = orchidName;
    }

    public void setNatural(Boolean natural) {
        isNatural = natural;
    }

    public void setOrchidDescription(String orchidDescription) {
        this.orchidDescription = orchidDescription;
    }

    public void setOrchidCategory(OrchidCategory orchidCategory) {
        this.orchidCategory = orchidCategory;
    }

    public void setAttractive(Boolean attractive) {
        isAttractive = attractive;
    }

    public void setOrchidURL(String orchidURL) {
        this.orchidURL = orchidURL;
    }

    public Long getOrchidID() {
        return orchidID;
    }

    public String getOrchidName() {
        return orchidName;
    }

    public Boolean getNatural() {
        return isNatural;
    }

    public String getOrchidDescription() {
        return orchidDescription;
    }

    public OrchidCategory getOrchidCategory() {
        return orchidCategory;
    }

    public Boolean getAttractive() {
        return isAttractive;
    }

    public String getOrchidURL() {
        return orchidURL;
    }
}