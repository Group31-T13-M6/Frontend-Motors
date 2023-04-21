import HeaderDashboard from "src/components/HeaderDashboard";
import Text from "src/styles/typography";

const DashboardUser = () => {
  return (
    <>
      <HeaderDashboard />
      <Text tag="h2" fontSize="title-3-500" color="alert1">
        Dashboard User
      </Text>
    </>
  );
};

export default DashboardUser;
