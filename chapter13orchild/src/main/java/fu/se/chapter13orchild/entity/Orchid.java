package fu.se.chapter13orchild.entity;

import jakarta.persistence.*;

import java.io.Serializable;


@Entity
    @Table(name = "orchid")
    public class Orchid implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "orchid_id")
    private int orchidID;
    @Column(name = "orchid_name")
    private String orchidName;
@Column(name = "is_natural", columnDefinition = "bit default 0")
private boolean isNatural;
@Column(name = "orchid_description")
private String orchidDescription;
@Column(name = "orchid_categogy")
private String orchidCategogy;
@Column(name = "is_attractive", columnDefinition = "bit default 0")
private boolean isAttractive;
@Column(name = "orchid_url")
private String orchidUrl;

    public int getOrchidID() {
        return orchidID;
    }

    public void setOrchidID(int orchidID) {
        this.orchidID = orchidID;
    }

    public String getOrchidName() {
        return orchidName;
    }

    public void setOrchidName(String orchidName) {
        this.orchidName = orchidName;
    }

    public boolean isNatural() {
        return isNatural;
    }

    public void setNatural(boolean natural) {
        isNatural = natural;
    }

    public String getOrchidDescription() {
        return orchidDescription;
    }

    public void setOrchidDescription(String orchidDescription) {
        this.orchidDescription = orchidDescription;
    }

    public String getOrchidCategogy() {
        return orchidCategogy;
    }

    public void setOrchidCategogy(String orchidCategogy) {
        this.orchidCategogy = orchidCategogy;
    }

    public boolean isAttractive() {
        return isAttractive;
    }

    public void setAttractive(boolean attractive) {
        isAttractive = attractive;
    }

    public String getOrchidUrl() {
        return orchidUrl;
    }

    public void setOrchidUrl(String orchidUrl) {
        this.orchidUrl = orchidUrl;
    }

    public Orchid(int orchidID, String orchidName, boolean isNatural, String orchidDescription, String orchidCategogy, boolean isAttractive, String orchidUrl) {
        this.orchidID = orchidID;
        this.orchidName = orchidName;
        this.isNatural = isNatural;
        this.orchidDescription = orchidDescription;
        this.orchidCategogy = orchidCategogy;
        this.isAttractive = isAttractive;
        this.orchidUrl = orchidUrl;
    }

    public Orchid() {
    }
}
