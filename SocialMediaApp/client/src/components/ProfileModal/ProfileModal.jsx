import { BackgroundImage, Modal, useMantineTheme } from '@mantine/core';
import "./ProfileModal.css"
function ProfileModal({ modalOpened, setModalOpened }) {
    const theme = useMantineTheme();

    return (
        <Modal
            overlayColor={theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.colors.gray[2]}
            overlayOpacity={0.55}
            overlayBlur={3}
            size="45%"
            opened={modalOpened}
            onClose= {()=>setModalOpened(false)}
        >
          
          
            <form className='infoForm'>
                <h3>Your info</h3>
                <div className="infodata">
                <input type="text" placeholder="First Name" name="firstName" />
             <input type="text" placeholder="Last Name" name="lastname"/>

                </div>
                <div className="infodata">
                <input type="text" placeholder="Works at" name="worksAt" /> 
                <input type="text" placeholder="From" name="From" /> 
                </div>

                <div className="infodata">
                <input type="text" placeholder="Lives in" name="livesIn"/>
                <input type="text" placeholder="Country" name="country" />  
                </div>

                <div className="infodata">
                <input type="text" placeholder="Relationship status" name="relationshipStatus" />
                <input type="text" placeholder="Joined" name="joined" />
                </div>
               
                <div className="infodata">
                Profile Image<input type="file" name="profileImg" />
                
                </div>
                <div className="infodata">
                Cover Image<input type="file" name="coverImg" />
                </div>
                <button className='button updateButton'>Update</button>
           
           
           
            </form>


            {/* Modal content */}
        </Modal>
    );
}
export default ProfileModal;