import { useContext, useEffect, useState } from "react";

import { useParams } from "react-router-dom";
import HeaderNav from "src/components/Header";
import {
  HomeContext,
  IUserRequest,
  IUserRequestAnnouncements,
  iProduct,
} from "src/context/HomeContext";
import { StyledMainProfile } from "./style";
import { StyledInitialName } from "src/styles/components/StyledInitialName";
import Text from "src/styles/typography";
import { MainButton } from "src/styles/components/ButtonsLink";
import Card from "src/components/Card";

const Profile = () => {
  const { user, loading, getLoggedUser, getActualProfile } =
    useContext(HomeContext);
  const [isOwner, setIsOwner] = useState(false);
  const [announcements, setAnnouncements] = useState<any>();
  const { id } = useParams();
  const [userSearched, setUserSearched] = useState<IUserRequest>();

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await getActualProfile(id!);
        const actualProfile = response?.data;
        setUserSearched(actualProfile);
      } catch (err) {}
    };

    fetchProfile();
  }, [user]);

  return loading ? (
    <p>Loading...</p>
  ) : (
    <>
      <HeaderNav id={user?.id} name={user?.name} />
      <StyledMainProfile>
        <div className="advertiser-info">
          <StyledInitialName w="80" h="80">
            {userSearched?.name[0]}
          </StyledInitialName>
          <div>
            <Text fontSize="title-6-600">{userSearched?.name}</Text>
            <span>
              {userSearched?.type_user == "Advertiser"
                ? "Anunciante"
                : "Comprador"}
            </span>
          </div>
          <Text fontSize="body-1-400" color="grey2">
            {isOwner ? user?.description : "not owner description"}
          </Text>
          <div className="advertiser-createButton">
            <MainButton>Criar Anúncio</MainButton>
          </div>
        </div>

        <ul>
          {user?.announcements?.map((item: any, index) => {
            return <Card key={index + item.brand} {...item} />;
          })}
        </ul>
      </StyledMainProfile>
    </>
  );
};

export default Profile;
