package sut.sa.g21.repository;

import sut.sa.g21.entity.DeliveryAddress;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource
    public
    interface DeliveryAddressRepository extends JpaRepository<DeliveryAddress, Long> {
}