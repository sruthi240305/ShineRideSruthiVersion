import React from 'react';
import CarHeader from './CarHeader';
import CarDetails from './CarDetails';
import InstructionsPanel from './InstructionsPanel';
import ExpandableSection from './ExpandableSection';
import ServiceList from './ServiceList';

export default function CarCard({ car, onUpdateCar }) {
    const handleServiceComplete = (serviceId) => {
        const updatedServices = car.services.map(service =>
            service.id === serviceId
                ? { ...service, completed: true, status: 'completed' }
                : service
        );

        const allCompleted = updatedServices.every(service => service.completed);

        const updatedCar = {
            ...car,
            services: updatedServices,
            status: allCompleted ? 'completed' : 'in-progress'
        };

        onUpdateCar(updatedCar);

        if (allCompleted) {
            alert(`Service completed for ${car.customerName}'s ${car.carModel}. Customer notification sent!`);
        }
    };

    const handleServiceStatusChange = (serviceId, status) => {
        const updatedServices = car.services.map(service =>
            service.id === serviceId ? { ...service, status } : service
        );

        const hasInProgress = updatedServices.some(service => service.status === 'in-progress');

        const updatedCar = {
            ...car,
            services: updatedServices,
            status: hasInProgress ? 'in-progress' : car.status
        };

        onUpdateCar(updatedCar);
    };

    const completedCount = car.services.filter(s => s.completed).length;

    return (
        <div className="bg-gradient-to-br from-gray-900 to-black border-2 border-purple-500/30 rounded-xl overflow-hidden hover:border-purple-500/50 transition-all">
            <div className="p-5 border-b border-purple-500/20">
                <CarHeader car={car} />
                <CarDetails car={car} />
                <InstructionsPanel instructions={car.instructions} />
            </div>

            <ExpandableSection
                title="Service Tasks"
                count={completedCount}
                total={car.services.length}
            >
                <ServiceList
                    services={car.services}
                    onServiceComplete={handleServiceComplete}
                    onServiceStatusChange={handleServiceStatusChange}
                />
            </ExpandableSection>
        </div>
    );
}
