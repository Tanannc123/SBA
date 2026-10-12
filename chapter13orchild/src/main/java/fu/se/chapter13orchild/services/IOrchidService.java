package fu.se.chapter13orchild.services;

import fu.se.chapter13orchild.entity.Orchid;

import java.util.List;
import java.util.Optional;

public interface IOrchidService {
    public List<Orchid> getAllOrchid();
    public Orchid insertOrchid(Orchid orchid);
    public Orchid updateOrchid(int orchidId,Orchid orchid);
    public void deleteOrchid(int orchid);
    public Optional<Orchid> getOrchidById(int orchidId);
}
