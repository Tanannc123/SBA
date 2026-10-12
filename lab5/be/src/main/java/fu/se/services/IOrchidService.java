package fu.se.services;

import fu.se.entity.Orchid;
import java.util.List;
import java.util.Optional;
public interface IOrchidService {
    List<Orchid> getAllOrchids();
    Optional<Orchid> getOrchidByID(int orchidID);
    Orchid insertOrchid(Orchid orchid);
    Orchid updateOrchid(int OrchidID, Orchid Orchid);
    void deleteOrchid(int orchidID);
}
