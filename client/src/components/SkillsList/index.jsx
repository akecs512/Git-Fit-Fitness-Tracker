const ActivitysList = ({ activitys }) => {
  if (!activitys.length) {
    return <h3>No Info Yet</h3>;
  }

  return (
    <div>
      <div className="flex-row justify-space-between my-4">
        {activitys &&
          activitys.map((activity) => (
            <div key={activity} className="col-12 col-xl-6">
              <div className="card mb-3">
                <h4 className="card-header bg-dark text-light p-2 m-0">
                  {activity} <br />
                </h4>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default ActivitysList;
