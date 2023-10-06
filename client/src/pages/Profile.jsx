import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";

import ActivitysList from "../components/ActivitysList";
import ActivityForm from "../components/ActivityForm";

import { QUERY_SINGLE_PROFILE } from "../utils/queries";

const User = () => {
  const { profileId } = useParams();

  const { loading, data } = useQuery(QUERY_SINGLE_PROFILE, {
    variables: { profileId: profileId },
  });

  const user = data?.user || {};

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <h2 className="card-header">{user.name}'s Information</h2>

      {user.activitys?.length > 0 && (
        <ActivitysList activitys={user.activitys} />
      )}

      <div className="my-4 p-4" style={{ border: "1px dotted #1a1a1a" }}>
        <ActivityForm profileId={user._id} />
      </div>
    </div>
  );
};

export default User;
