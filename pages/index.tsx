import React from "react";
import Card from "../components/common/Card";
import Button from "../components/common/Button";

const HomePage = () => (
    <div className="min-h-screen bg-gray-100 p-6">
        <h1 className="text-3xl font-bold mb-8">ALX Listing App</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card
                title="Sample Property"
                image="/assets/placeholder-property.png"
                description="A beautiful home available for booking."
            />
        </div>
        <div className="mt-6">
            <Button>{`Book Now`}</Button>
        </div>
    </div>
);

export default HomePage;
