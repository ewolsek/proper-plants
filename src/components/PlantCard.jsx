function PlantCard ({ plants, removePlants }) {
    return ( 
            <>
                <h2>Cart</h2>
        
        {plants.length === 0 ? (
            <p>Nothing in Cart</p>
        ) : (
            <>
                {plants.map((plant) => {
                    return (
                        <div key={plant.id}>
                            <button
                                onClick={() => removePlants(plant)}
                                >
                                    -
                                </button>
                            <span>
                                {plant}
                            </span>
                        </div>
                    );
                })}
        </> 
    )}
    </>
    );
}

export default PlantCard;