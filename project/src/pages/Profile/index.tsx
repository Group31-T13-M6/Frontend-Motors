import HeaderNav from "src/components/Header";
import Text from "src/styles/typography";
import Card from "src/components/Card";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { HomeContext } from "src/context/HomeContext";
import { StyledMainProfile } from "./style";
import { StyledInitialName } from "src/styles/components/StyledInitialName";
import { MainButton } from "src/styles/components/ButtonsLink";
import { IProduct } from "src/interfaces/products";
import { IUser } from "src/interfaces/user";

const Profile = () => {
  const { user, loading, getActualProfile, getLoggedUser, isOwner } =
    useContext(HomeContext);
  const { id } = useParams();
  const [userSearched, setUserSearched] = useState<IUser>();

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        await getLoggedUser();
        const response = await getActualProfile(id!);
        const actualProfile = response?.data;
        setUserSearched(actualProfile);
      } catch (err) {}
    };

    fetchProfile();
  }, []);

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
              {userSearched?.type_user === "Advertiser"
                ? "Anunciante"
                : "Comprador"}
            </span>
          </div>
          <Text fontSize="body-1-400" color="grey2">
            {userSearched?.description}
          </Text>
          {userSearched?.id == user?.id && (
            <div className="advertiser-createButton">
              <MainButton>Criar Anúncio</MainButton>
            </div>
          )}
        </div>

        <ul>
          {userSearched?.announcements[0] ? (
            userSearched?.announcements?.map(
              (item: IProduct, index: number) => {
                return (
                  <Card
                    key={index + item.brand}
                    {...item}
                    status={user?.id !== userSearched.id}
                    userSection={user?.id !== userSearched.id}
                    name={
                      user?.id !== userSearched.id
                        ? userSearched?.name
                        : undefined
                    }
                    ownerSection={user?.id === userSearched.id}
                  />
                );
              }
            )
          ) : (
            <Text tag="span"> Nenhum anúncio encontrado.... </Text>
          )}
        </ul>
      </StyledMainProfile>
    </>
  );
};

export default Profile;
