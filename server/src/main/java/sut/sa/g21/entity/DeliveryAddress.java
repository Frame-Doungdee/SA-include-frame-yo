package sut.sa.g21.entity;
import javax.persistence.*;
import javax.persistence.Entity;
import javax.persistence.Table;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import lombok.*;


@Entity
@Data
@Table(name="DeliveryAddress")
public class DeliveryAddress {
    @Id
    @SequenceGenerator(name="deliveryAddress_seq",sequenceName="deliveryAddress_seq")               
    @GeneratedValue(strategy=GenerationType.SEQUENCE, generator="deliveryAddress_seq")
    private @NonNull Long deliveryAddressId;
    private @NonNull String  address;
    private @NonNull Long  post;

    @ManyToOne()
    @JoinColumn(name= "provinceId")
    private Province province;

    public DeliveryAddress(){}
    public DeliveryAddress(String  address,Long  post) {
        this.address = address;
        this.post = post;
    }

    
}