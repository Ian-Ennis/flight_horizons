function LaunchDescription({ futureLaunches, index}) {
    return (
        <div id="launch_description_container">
            <p>Provider: {futureLaunches[index].provider.name}</p>
            <p>Vehicle: {futureLaunches[index].vehicle.name}</p>
            <p>{futureLaunches[index].launch_description}</p>
        </div>
    )
}

export default LaunchDescription