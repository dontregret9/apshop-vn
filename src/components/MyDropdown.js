import React, { Component } from 'react';
import './MyDropdown.css';

class Dropdown extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isShowDropdown: false,
            level_1: false,
            level_2: false,
            level_3: false,

            GGear_2nd: false,
            Conference_2nd: false,
            PC_2nd: false,
            Screen_2nd: false,
            CComponents_2nd: false,
            LaptopGaming_2nd: false,
            ChairGaming_2nd: false,
            Audio_2nd: false,
            Office_2nd: false,
            Network_2nd: false,
            Another_2nd: false,

            Mouse_3rd: false,
            Keyboard_3rd: false,
            Mouse_pads_3rd: false,
            Headphone_3rd: false,
            Remote_control_3rd: false,
            Playstation_3rd: false,
            Stream_3rd: false,
            Accessories_3rd: false,

            Camera_conference_3rd: false,
            Computer_nuc_3rd: false,

            Computer_aps_3rd: false,
            Computer_msi_3rd: false,
            Computer_intel_3rd: false,
            Computer_accer_3rd: false,
            Computer_assus_3rd: false,
            Computer_dell_3rd: false,

            CPU_3rd: false,
            Main_3rd: false,
            VGA_3rd: false,
            Ram_3rd: false,
            SSD_3rd: false,
            HDD_3rd: false,
            PSU_3rd: false,
            Case_3rd: false,
            Heatsink_3rd: false,
            Fan_3rd: false,
            Custom_3rd: false,

            Chair_gaming_3rd: false,
            Table_gaming_3rd: false,
            Accessories_gaming_3rd: false,

            Audio_Headphone_3rd: false,
            Speaker_3rd: false,
            Sound_card_3rd: false,
            Audio_bigsale_3rd: false,

            Office_mouse_3rd: false,
            Office_keyboard_3rd: false,
            Office_headphone_3rd: false,
            Office_webcam_3rd: false,
            Office_usb_3rd: false,
            Office_harddrive_3rd: false,
            Office_represent_3rd: false,
            Office_balo_3rd: false,
            Office_software_3rd: false,

            Another_smartwatch_3rd: false,
            Another_camerajourney_3rd: false,
        };
        //level 1
        this.ShowDropdown = this.ShowDropdown.bind(this);
        this.HideDropdown = this.HideDropdown.bind(this);

        //level 2

        this.Show_GG_Dropdown_2nd = this.Show_GG_Dropdown_2nd.bind(this);
        this.Hide_GG_Dropdown_2nd = this.Hide_GG_Dropdown_2nd.bind(this);
        this.Show_Conference_Dropdown_2nd = this.Show_Conference_Dropdown_2nd.bind(this);
        this.Hide_Conference_Dropdown_2nd = this.Hide_Conference_Dropdown_2nd.bind(this);
        this.Show_PC_Dropdown_2nd = this.Show_PC_Dropdown_2nd.bind(this);
        this.Hide_PC_Dropdown_2nd = this.Hide_PC_Dropdown_2nd.bind(this);
        this.Show_Screen_Dropdown_2nd = this.Show_Screen_Dropdown_2nd.bind(this);
        this.Hide_Screen_Dropdown_2nd = this.Hide_Screen_Dropdown_2nd.bind(this);
        this.Show_CComponents_Dropdown_2nd = this.Show_CComponents_Dropdown_2nd.bind(this);
        this.Hide_CComponents_Dropdown_2nd = this.Hide_CComponents_Dropdown_2nd.bind(this);
        this.Show_LaptopGaming_Dropdown_2nd = this.Show_LaptopGaming_Dropdown_2nd.bind(this);
        this.Hide_LaptopGaming_Dropdown_2nd = this.Hide_LaptopGaming_Dropdown_2nd.bind(this);
        this.Show_ChairGaming_Dropdown_2nd = this.Show_ChairGaming_Dropdown_2nd.bind(this);
        this.Hide_ChairGaming_Dropdown_2nd = this.Hide_ChairGaming_Dropdown_2nd.bind(this);
        this.Show_Audio_Dropdown_2nd = this.Show_Audio_Dropdown_2nd.bind(this);
        this.Hide_Audio_Dropdown_2nd = this.Hide_Audio_Dropdown_2nd.bind(this);
        this.Show_Office_Dropdown_2nd = this.Show_Office_Dropdown_2nd.bind(this);
        this.Hide_Office_Dropdown_2nd = this.Hide_Office_Dropdown_2nd.bind(this);
        this.Show_Network_Dropdown_2nd = this.Show_Network_Dropdown_2nd.bind(this);
        this.Hide_Network_Dropdown_2nd = this.Hide_Network_Dropdown_2nd.bind(this);
        this.Show_Another_Dropdown_2nd = this.Show_Another_Dropdown_2nd.bind(this);
        this.Hide_Another_Dropdown_2nd = this.Hide_Another_Dropdown_2nd.bind(this);

        //level 3
        this.Show_Mouse_Dropdown_3rd = this.Show_Mouse_Dropdown_3rd.bind(this);
        this.Hide_Mouse_Dropdown_3rd = this.Hide_Mouse_Dropdown_3rd.bind(this);
        this.Show_Keyboard_Dropdown_3rd = this.Show_Keyboard_Dropdown_3rd.bind(this);
        this.Hide_Keyboard_Dropdown_3rd = this.Hide_Keyboard_Dropdown_3rd.bind(this);
        this.Show_Mousepads_Dropdown_3rd = this.Show_Mousepads_Dropdown_3rd.bind(this);
        this.Hide_Mousepads_Dropdown_3rd = this.Hide_Mousepads_Dropdown_3rd.bind(this);
        this.Show_Headphone_Dropdown_3rd = this.Show_Headphone_Dropdown_3rd.bind(this);
        this.Hide_Headphone_Dropdown_3rd = this.Hide_Headphone_Dropdown_3rd.bind(this);
        this.Show_Remotecontrol_Dropdown_3rd = this.Show_Remotecontrol_Dropdown_3rd.bind(this);
        this.Hide_Remotecontrol_Dropdown_3rd = this.Hide_Remotecontrol_Dropdown_3rd.bind(this);
        this.Show_Playstation_Dropdown_3rd = this.Show_Playstation_Dropdown_3rd.bind(this);
        this.Hide_Playstation_Dropdown_3rd = this.Hide_Playstation_Dropdown_3rd.bind(this);
        this.Show_Stream_Dropdown_3rd = this.Show_Stream_Dropdown_3rd.bind(this);
        this.Hide_Stream_Dropdown_3rd = this.Hide_Stream_Dropdown_3rd.bind(this);
        this.Show_Accessories_Dropdown_3rd = this.Show_Accessories_Dropdown_3rd.bind(this);
        this.Hide_Accessories_Dropdown_3rd = this.Hide_Accessories_Dropdown_3rd.bind(this);

        this.Show_CConference_Dropdown_3rd = this.Show_CConference_Dropdown_3rd.bind(this);
        this.Hide_CConference_Dropdown_3rd = this.Hide_CConference_Dropdown_3rd.bind(this);
        this.Show_Nuccomputer_Dropdown_3rd = this.Show_Nuccomputer_Dropdown_3rd.bind(this);
        this.Hide_Nuccomputer_Dropdown_3rd = this.Hide_Nuccomputer_Dropdown_3rd.bind(this);

        this.Show_Computeraps_Dropdown_3rd = this.Show_Computeraps_Dropdown_3rd.bind(this);
        this.Hide_Computeraps_Dropdown_3rd = this.Show_Computeraps_Dropdown_3rd.bind(this);
        this.Show_Computermsi_Dropdown_3rd = this.Show_Computermsi_Dropdown_3rd.bind(this);
        this.Hide_Computermsi_Dropdown_3rd = this.Hide_Computermsi_Dropdown_3rd.bind(this);
        this.Show_Computerintel_Dropdown_3rd = this.Show_Computerintel_Dropdown_3rd.bind(this);
        this.Hide_Computerintel_Dropdown_3rd = this.Hide_Computerintel_Dropdown_3rd.bind(this);
        this.Show_Computerdell_Dropdown_3rd = this.Show_Computerdell_Dropdown_3rd.bind(this);
        this.Hide_Computerdell_Dropdown_3rd = this.Hide_Computerdell_Dropdown_3rd.bind(this);

        this.Show_CPU_Dropdown_3rd = this.Show_CPU_Dropdown_3rd.bind(this);
        this.Hide_CPU_Dropdown_3rd = this.Hide_CPU_Dropdown_3rd.bind(this);
        this.Show_Main_Dropdown_3rd = this.Show_Main_Dropdown_3rd.bind(this)
        this.Hide_Main_Dropdown_3rd = this.Hide_Main_Dropdown_3rd.bind(this);
        this.Show_VGA_Dropdown_3rd = this.Show_VGA_Dropdown_3rd.bind(this);
        this.Hide_VGA_Dropdown_3rd = this.Hide_VGA_Dropdown_3rd.bind(this);
        this.Show_RAM_Dropdown_3rd = this.Show_RAM_Dropdown_3rd.bind(this);
        this.Hide_RAM_Dropdown_3rd = this.Hide_RAM_Dropdown_3rd.bind(this);
        this.Show_SSD_Dropdown_3rd = this.Show_SSD_Dropdown_3rd.bind(this);
        this.Hide_SSD_Dropdown_3rd = this.Hide_SSD_Dropdown_3rd.bind(this);
        this.Show_HDD_Dropdown_3rd = this.Show_HDD_Dropdown_3rd.bind(this);
        this.Hide_HDD_Dropdown_3rd = this.Hide_HDD_Dropdown_3rd.bind(this);
        this.Show_PSU_Dropdown_3rd = this.Show_PSU_Dropdown_3rd.bind(this);
        this.Hide_PSU_Dropdown_3rd = this.Hide_PSU_Dropdown_3rd.bind(this);
        this.Show_CASE_Dropdown_3rd = this.Show_CASE_Dropdown_3rd.bind(this);
        this.Hide_CASE_Dropdown_3rd = this.Hide_CASE_Dropdown_3rd.bind(this);
        this.Show_Heatsink_Dropdown_3rd = this.Show_Heatsink_Dropdown_3rd.bind(this);
        this.Hide_Heatsink_Dropdown_3rd = this.Hide_Heatsink_Dropdown_3rd.bind(this);
        this.Show_Fan_Dropdown_3rd = this.Show_Fan_Dropdown_3rd.bind(this);
        this.Hide_Fan_Dropdown_3rd = this.Hide_Fan_Dropdown_3rd.bind(this);
        this.Show_Fancustom_Dropdown_3rd = this.Show_Fancustom_Dropdown_3rd.bind(this);
        this.Hide_Fancustom_Dropdown_3rd = this.Hide_Fancustom_Dropdown_3rd.bind(this);
        this.Show_ChairGaming_Dropdown_3rd = this.Show_ChairGaming_Dropdown_3rd.bind(this);
        this.Hide_ChairGaming_Dropdown_3rd = this.Hide_ChairGaming_Dropdown_3rd.bind(this);
        this.Show_TableGaming_Dropdown_3rd = this.Show_TableGaming_Dropdown_3rd.bind(this);
        this.Hide_TableGaming_Dropdown_3rd = this.Hide_TableGaming_Dropdown_3rd.bind(this);
        this.Show_AccessoriesGaming_Dropdown_3rd = this.Show_AccessoriesGaming_Dropdown_3rd.bind(this);
        this.Hide_AccessoriesGaming_Dropdown_3rd = this.Hide_AccessoriesGaming_Dropdown_3rd.bind(this);
        this.Show_Audio_Headphone_Dropdown_3rd = this.Show_Audio_Headphone_Dropdown_3rd.bind(this);
        this.Hide_Audio_Headphone_Dropdown_3rd = this.Hide_Audio_Headphone_Dropdown_3rd.bind(this);
        this.Show_Speaker_Dropdown_3rd = this.Show_Speaker_Dropdown_3rd.bind(this);
        this.Hide_Speaker_Dropdown_3rd = this.Hide_Speaker_Dropdown_3rd.bind(this);
        this.Show_SoundCard_Dropdown_3rd = this.Show_SoundCard_Dropdown_3rd.bind(this);
        this.Hide_SoundCard_Dropdown_3rd = this.Hide_SoundCard_Dropdown_3rd.bind(this);
        this.Show_AudioBigSale_Dropdown_3rd = this.Show_AudioBigSale_Dropdown_3rd.bind(this);
        this.Show_OfficeMouse_Dropdown_3rd = this.Show_OfficeMouse_Dropdown_3rd.bind(this);
        this.Hide_OfficeMouse_Dropdown_3rd = this.Hide_OfficeMouse_Dropdown_3rd.bind(this);
        this.Show_OfficeKeyboard_Dropdown_3rd = this.Show_OfficeKeyboard_Dropdown_3rd.bind(this);
        this.Hide_OfficeKeyboard_Dropdown_3rd = this.Hide_OfficeKeyboard_Dropdown_3rd.bind(this);
        this.Show_OfficeHeadphone_Dropdown_3rd = this.Show_OfficeHeadphone_Dropdown_3rd.bind(this);
        this.Hide_OfficeHeadphone_Dropdown_3rd = this.Hide_OfficeHeadphone_Dropdown_3rd.bind(this);
        this.Show_OfficeWebcam_Dropdown_3rd = this.Show_OfficeWebcam_Dropdown_3rd.bind(this);
        this.Hide_OfficeWebcam_Dropdown_3rd = this.Hide_OfficeWebcam_Dropdown_3rd.bind(this);
        this.Show_OfficeUsb_Dropdown_3rd = this.Show_OfficeUsb_Dropdown_3rd.bind(this);
        this.Hide_OfficeUsb_Dropdown_3rd = this.Hide_OfficeUsb_Dropdown_3rd.bind(this);
        this.Show_OfficeHarddrive_Dropdown_3rd = this.Show_OfficeHarddrive_Dropdown_3rd.bind(this);
        this.Hide_OfficeHarddrive_Dropdown_3rd = this.Hide_OfficeHarddrive_Dropdown_3rd.bind(this);
        this.Show_OfficeRepresent_Dropdown_3rd = this.Show_OfficeRepresent_Dropdown_3rd.bind(this);
        this.Hide_OfficeRepresent_Dropdown_3rd = this.Hide_OfficeRepresent_Dropdown_3rd.bind(this);
        this.Show_OfficeBalo_Dropdown_3rd = this.Show_OfficeBalo_Dropdown_3rd.bind(this);
        this.Hide_OfficeBalo_Dropdown_3rd = this.Hide_OfficeBalo_Dropdown_3rd.bind(this);
        this.Show_OfficeSoftware_Dropdown_3rd = this.Show_OfficeSoftware_Dropdown_3rd.bind(this);
        this.Hide_OfficeSoftware_Dropdown_3rd = this.Hide_OfficeSoftware_Dropdown_3rd.bind(this);
        this.Show_AnotherSmartwatch_Dropdown_3rd = this.Show_AnotherSmartwatch_Dropdown_3rd.bind(this);
        this.Hide_AnotherSmartwatch_Dropdown_3rd = this.Hide_AnotherSmartwatch_Dropdown_3rd.bind(this);
        this.Show_AnotherCameraJourney_Dropdown_3rd = this.Show_AnotherCameraJourney_Dropdown_3rd.bind(this);
        this.Hide_AnotherCameraJourney_Dropdown_3rd = this.Hide_AnotherCameraJourney_Dropdown_3rd.bind(this);

    }

    ShowDropdown(event) {
        event.preventDefault();
        this.setState({ isShowDropdown: true });
    }

    HideDropdown(event) {
        event.preventDefault();
        this.setState(
            {
                isShowDropdown: false,
            });
    }

    // --------------------------level 2---------------------------------------------
    Show_GG_Dropdown_2nd(event) {
        event.preventDefault();
        this.setState({
            GGear_2nd: true,
            level_2: true,

            Conference_2nd: false,
            PC_2nd: false,
            Screen_2nd: false,
            CComponents_2nd: false,
            LaptopGaming_2nd: false,
            ChairGaming_2nd: false,
            Audio_2nd: false,
            Office_2nd: false,
            Network_2nd: false,
            Another_2nd: false,
        })
    }

    Hide_GG_Dropdown_2nd(event) {
        // sleep 1/2 second. and checking Is mouse in new dropdown ?
        event.preventDefault();
        this.setState({ level_2: false })
        setTimeout(() => {
            if (this.state.level_2 === false) {
                this.setState({ GGear_2nd: false });
            }
        }, 300);
    }
    Show_Conference_Dropdown_2nd(event) {
        event.preventDefault();
        this.setState({
            Conference_2nd: true,
            level_2: true,

            GGear_2nd: false,
            PC_2nd: false,
            Screen_2nd: false,
            CComponents_2nd: false,
            LaptopGaming_2nd: false,
            ChairGaming_2nd: false,
            Audio_2nd: false,
            Office_2nd: false,
            Network_2nd: false,
            Another_2nd: false,

        })
    }

    Hide_Conference_Dropdown_2nd(event) {
        // sleep 1/2 second. and checking Is mouse in new dropdown ?
        event.preventDefault();
        this.setState({ level_2: false })
        setTimeout(() => {
            if (this.state.level_2 === false) {
                this.setState({ Conference_2nd: false });
            }
        }, 300);
    }
    Show_PC_Dropdown_2nd(event) {
        event.preventDefault();
        this.setState({
            PC_2nd: true,
            level_2: true,

            GGear_2nd: false,
            Conference_2nd: false,
            Screen_2nd: false,
            CComponents_2nd: false,
            LaptopGaming_2nd: false,
            ChairGaming_2nd: false,
            Audio_2nd: false,
            Office_2nd: false,
            Network_2nd: false,
            Another_2nd: false,

        })
    }

    Hide_PC_Dropdown_2nd(event) {
        // sleep 1/2 second. and checking Is mouse in new dropdown ?
        event.preventDefault();
        this.setState({ level_2: false })
        setTimeout(() => {
            if (this.state.level_2 === false) {
                this.setState({ PC_2nd: false });
            }
        }, 300);
    }
    Show_Screen_Dropdown_2nd(event) {
        event.preventDefault();
        this.setState({
            Screen_2nd: true,
            level_2: true,

            GGear_2nd: false,
            Conference_2nd: false,
            PC_2nd: false,
            CComponents_2nd: false,
            LaptopGaming_2nd: false,
            ChairGaming_2nd: false,
            Audio_2nd: false,
            Office_2nd: false,
            Network_2nd: false,
            Another_2nd: false,

        })
    }
    Hide_Screen_Dropdown_2nd(event) {
        // sleep 1/2 second. and checking Is mouse in new dropdown ?
        event.preventDefault();
        this.setState({ level_2: false })
        setTimeout(() => {
            if (this.state.level_2 === false) {
                this.setState({ Screen_2nd: false });
            }
        }, 300);
    }
    Show_CComponents_Dropdown_2nd(event) {
        event.preventDefault();
        this.setState({
            CComponents_2nd: true,
            level_2: true,

            GGear_2nd: false,
            Conference_2nd: false,
            Screen_2nd: false,
            PC_2nd: false,
            LaptopGaming_2nd: false,
            ChairGaming_2nd: false,
            Audio_2nd: false,
            Office_2nd: false,
            Network_2nd: false,
            Another_2nd: false,

        })
    }
    Hide_CComponents_Dropdown_2nd(event) {
        // sleep 1/2 second. and checking Is mouse in new dropdown ?
        event.preventDefault();
        this.setState({ level_2: false })
        setTimeout(() => {
            if (this.state.level_2 === false) {
                this.setState({ CComponents_2nd: false });
            }
        }, 300);
    }
    Show_LaptopGaming_Dropdown_2nd(event) {
        event.preventDefault();
        this.setState({
            LaptopGaming_2nd: true,
            level_2: true,

            GGear_2nd: false,
            Conference_2nd: false,
            Screen_2nd: false,
            CComponents_2nd: false,
            PC_2nd: false,
            ChairGaming_2nd: false,
            Audio_2nd: false,
            Office_2nd: false,
            Network_2nd: false,
            Another_2nd: false,

        })
    }
    Hide_LaptopGaming_Dropdown_2nd(event) {
        // sleep 1/2 second. and checking Is mouse in new dropdown ?
        event.preventDefault();
        this.setState({ level_2: false })
        setTimeout(() => {
            if (this.state.level_2 === false) {
                this.setState({ LaptopGaming_2nd: false });
            }
        }, 300);
    }
    Show_ChairGaming_Dropdown_2nd(event) {
        event.preventDefault();
        this.setState({
            ChairGaming_2nd: true,
            level_2: true,

            GGear_2nd: false,
            Conference_2nd: false,
            Screen_2nd: false,
            CComponents_2nd: false,
            LaptopGaming_2nd: false,
            PC_2nd: false,
            Audio_2nd: false,
            Office_2nd: false,
            Network_2nd: false,
            Another_2nd: false,

        })
    }
    Hide_ChairGaming_Dropdown_2nd(event) {
        // sleep 1/2 second. and checking Is mouse in new dropdown ?
        event.preventDefault();
        this.setState({ level_2: false })
        setTimeout(() => {
            if (this.state.level_2 === false) {
                this.setState({ ChairGaming_2nd: false });
            }
        }, 700);
    }
    Show_Audio_Dropdown_2nd(event) {
        event.preventDefault();
        this.setState({
            Audio_2nd: true,
            level_2: true,

            GGear_2nd: false,
            Conference_2nd: false,
            Screen_2nd: false,
            CComponents_2nd: false,
            LaptopGaming_2nd: false,
            ChairGaming_2nd: false,
            PC_2nd: false,
            Office_2nd: false,
            Network_2nd: false,
            Another_2nd: false,

        })
    }
    Hide_Audio_Dropdown_2nd(event) {
        // sleep 1/2 second. and checking Is mouse in new dropdown ?
        event.preventDefault();
        this.setState({ level_2: false })
        setTimeout(() => {
            if (this.state.level_2 === false) {
                this.setState({ Audio_2nd: false });
            }
        }, 1000);
    }
    Show_Office_Dropdown_2nd(event) {
        event.preventDefault();
        this.setState({
            Office_2nd: true,
            level_2: true,

            GGear_2nd: false,
            Conference_2nd: false,
            Screen_2nd: false,
            CComponents_2nd: false,
            LaptopGaming_2nd: false,
            ChairGaming_2nd: false,
            PC_2nd: false,
            Audio_2nd: false,
            Network_2nd: false,
            Another_2nd: false,

        })
    }
    Hide_Office_Dropdown_2nd(event) {
        // sleep 1/2 second. and checking Is mouse in new dropdown ?
        event.preventDefault();
        this.setState({ level_2: false })
        setTimeout(() => {
            if (this.state.level_2 === false) {
                this.setState({ Office_2nd: false });
            }
        }, 300);
    }
    Show_Network_Dropdown_2nd(event) {
        event.preventDefault();
        this.setState({
            Network_2nd: true,
            level_2: true,

            GGear_2nd: false,
            Conference_2nd: false,
            Screen_2nd: false,
            CComponents_2nd: false,
            LaptopGaming_2nd: false,
            ChairGaming_2nd: false,
            PC_2nd: false,
            Office_2nd: false,
            Audio_2nd: false,
            Another_2nd: false,

        })
    }
    Hide_Network_Dropdown_2nd(event) {
        // sleep 1/2 second. and checking Is mouse in new dropdown ?
        event.preventDefault();
        this.setState({ level_2: false })
        setTimeout(() => {
            if (this.state.level_2 === false) {
                this.setState({ Network_2nd: false });
            }
        }, 1000);
    }
    Show_Another_Dropdown_2nd(event) {
        event.preventDefault();
        this.setState({
            Another_2nd: true,
            level_2: true,

            GGear_2nd: false,
            Conference_2nd: false,
            Screen_2nd: false,
            CComponents_2nd: false,
            LaptopGaming_2nd: false,
            ChairGaming_2nd: false,
            PC_2nd: false,
            Office_2nd: false,
            Audio_2nd: false,
            Network_2nd: false,
        })
    }
    Hide_Another_Dropdown_2nd(event) {
        // sleep 1/2 second. and checking Is mouse in new dropdown ?
        event.preventDefault();
        this.setState({ level_2: false })
        setTimeout(() => {
            if (this.state.level_2 === false) {
                this.setState({ Another_2nd: false });
            }
        }, 1000);
    }

    //------------------------------- level 3 --------------------------------------
    Show_Mouse_Dropdown_3rd(event) {
        event.preventDefault()
        this.setState({
            Mouse_3rd: true,
            level_3: true,
            level_2: true,

            Keyboard_3rd: false,
            Mouse_pads_3rd: false,
            Headphone_3rd: false,
            Remote_control_3rd: false,
            Playstation_3rd: false,
            Stream_3rd: false,
            Accessories_3rd: false,

            Camera_conference_3rd: false,
            Computer_nuc_3rd: false,

            Computer_aps_3rd: false,
            Computer_msi_3rd: false,
            Computer_intel_3rd: false,
            Computer_accer_3rd: false,
            Computer_assus_3rd: false,
            Computer_dell_3rd: false,

            CPU_3rd: false,
            Main_3rd: false,
            VGA_3rd: false,
            Ram_3rd: false,
            SSD_3rd: false,
            HDD_3rd: false,
            PSU_3rd: false,
            Case_3rd: false,
            Heatsink_3rd: false,
            Fan_3rd: false,
            Custom_3rd: false,

            Chair_gaming_3rd: false,
            Table_gaming_3rd: false,
            Accessories_gaming_3rd: false,

            Audio_Headphone_3rd: false,
            Speaker_3rd: false,
            Sound_card_3rd: false,
            Audio_bigsale_3rd: false,

            Office_mouse_3rd: false,
            Office_keyboard_3rd: false,
            Office_headphone_3rd: false,
            Office_webcam_3rd: false,
            Office_usb_3rd: false,
            Office_harddrive_3rd: false,
            Office_represent_3rd: false,
            Office_balo_3rd: false,
            Office_software_3rd: false,

            Another_smartwatch_3rd: false,
            Another_camerajourney_3rd: false
        })
    }
    Hide_Mouse_Dropdown_3rd(event) {
        event.preventDefault()
        this.setState({ level_3: false })
        setTimeout(() => {
            if (this.state.level_3 === false) {
                this.setState({ Mouse_3rd: false })
            }
        }, 300);
    }
    Show_Keyboard_Dropdown_3rd(event) {
        event.preventDefault()
        this.setState({
            Keyboard_3rd: true,
            level_2: true,
            level_3: true,

            Mouse_3rd: false,
            Mouse_pads_3rd: false,
            Headphone_3rd: false,
            Remote_control_3rd: false,
            Playstation_3rd: false,
            Stream_3rd: false,
            Accessories_3rd: false,

            Camera_conference_3rd: false,
            Computer_nuc_3rd: false,

            Computer_aps_3rd: false,
            Computer_msi_3rd: false,
            Computer_intel_3rd: false,
            Computer_accer_3rd: false,
            Computer_assus_3rd: false,
            Computer_dell_3rd: false,

            CPU_3rd: false,
            Main_3rd: false,
            VGA_3rd: false,
            Ram_3rd: false,
            SSD_3rd: false,
            HDD_3rd: false,
            PSU_3rd: false,
            Case_3rd: false,
            Heatsink_3rd: false,
            Fan_3rd: false,
            Custom_3rd: false,

            Chair_gaming_3rd: false,
            Table_gaming_3rd: false,
            Accessories_gaming_3rd: false,

            Audio_Headphone_3rd: false,
            Speaker_3rd: false,
            Sound_card_3rd: false,
            Audio_bigsale_3rd: false,

            Office_mouse_3rd: false,
            Office_keyboard_3rd: false,
            Office_headphone_3rd: false,
            Office_webcam_3rd: false,
            Office_usb_3rd: false,
            Office_harddrive_3rd: false,
            Office_represent_3rd: false,
            Office_balo_3rd: false,
            Office_software_3rd: false,

            Another_smartwatch_3rd: false,
            Another_camerajourney_3rd: false
        });
    }
    Hide_Keyboard_Dropdown_3rd(event) {
        event.preventDefault()
        this.setState({ level_3: false })
        setTimeout(() => {
            if (this.state.level_3 === false) {
                this.setState({ Keyboard_3rd: false })
            }
        }, 300);
    }
    Show_Mousepads_Dropdown_3rd(event) {
        event.preventDefault()
        this.setState({
            Mouse_pads_3rd: true,
            level_2: true,
            level_3: true,

            Mouse_3rd: false,
            Keyboard_3rd: false,
            Headphone_3rd: false,
            Remote_control_3rd: false,
            Playstation_3rd: false,
            Stream_3rd: false,
            Accessories_3rd: false,

            Camera_conference_3rd: false,
            Computer_nuc_3rd: false,

            Computer_aps_3rd: false,
            Computer_msi_3rd: false,
            Computer_intel_3rd: false,
            Computer_accer_3rd: false,
            Computer_assus_3rd: false,
            Computer_dell_3rd: false,

            CPU_3rd: false,
            Main_3rd: false,
            VGA_3rd: false,
            Ram_3rd: false,
            SSD_3rd: false,
            HDD_3rd: false,
            PSU_3rd: false,
            Case_3rd: false,
            Heatsink_3rd: false,
            Fan_3rd: false,
            Custom_3rd: false,

            Chair_gaming_3rd: false,
            Table_gaming_3rd: false,
            Accessories_gaming_3rd: false,

            Audio_Headphone_3rd: false,
            Speaker_3rd: false,
            Sound_card_3rd: false,
            Audio_bigsale_3rd: false,

            Office_mouse_3rd: false,
            Office_keyboard_3rd: false,
            Office_headphone_3rd: false,
            Office_webcam_3rd: false,
            Office_usb_3rd: false,
            Office_harddrive_3rd: false,
            Office_represent_3rd: false,
            Office_balo_3rd: false,
            Office_software_3rd: false,

            Another_smartwatch_3rd: false,
            Another_camerajourney_3rd: false
        })
    }
    Hide_Mousepads_Dropdown_3rd(event) {
        event.preventDefault();
        this.setState({ level_3: false });
        setTimeout(() => {
            if (this.state.level_3 === false) {
                this.setState({ Mouse_pads_3rd: false })
            }
        }, 500);
    }
    Show_Headphone_Dropdown_3rd(event) {
        event.preventDefault();
        this.setState({
            Headphone_3rd: true,
            level_2: true,
            level_3: true,

            Mouse_3rd: false,
            Keyboard_3rd: false,
            Mouse_pads_3rd: false,
            Remote_control_3rd: false,
            Playstation_3rd: false,
            Stream_3rd: false,
            Accessories_3rd: false,

            Camera_conference_3rd: false,
            Computer_nuc_3rd: false,

            Computer_aps_3rd: false,
            Computer_msi_3rd: false,
            Computer_intel_3rd: false,
            Computer_accer_3rd: false,
            Computer_assus_3rd: false,
            Computer_dell_3rd: false,

            CPU_3rd: false,
            Main_3rd: false,
            VGA_3rd: false,
            Ram_3rd: false,
            SSD_3rd: false,
            HDD_3rd: false,
            PSU_3rd: false,
            Case_3rd: false,
            Heatsink_3rd: false,
            Fan_3rd: false,
            Custom_3rd: false,

            Chair_gaming_3rd: false,
            Table_gaming_3rd: false,
            Accessories_gaming_3rd: false,

            Audio_Headphone_3rd: false,
            Speaker_3rd: false,
            Sound_card_3rd: false,
            Audio_bigsale_3rd: false,

            Office_mouse_3rd: false,
            Office_keyboard_3rd: false,
            Office_headphone_3rd: false,
            Office_webcam_3rd: false,
            Office_usb_3rd: false,
            Office_harddrive_3rd: false,
            Office_represent_3rd: false,
            Office_balo_3rd: false,
            Office_software_3rd: false,

            Another_smartwatch_3rd: false,
            Another_camerajourney_3rd: false
        })
    }
    Hide_Headphone_Dropdown_3rd(event) {
        event.preventDefault();

        this.setState({ level_3: false });

        setTimeout(() => {
            if (this.state.level_3 === false) {
                this.setState({ Headphone_3rd: false })
            }
        }, 300);
    }
    Show_Remotecontrol_Dropdown_3rd(event) {
        event.preventDefault();
        this.setState({
            Remote_control_3rd: true,
            level_2: true,
            level_3: true,

            Mouse_3rd: false,
            Keyboard_3rd: false,
            Mouse_pads_3rd: false,
            Headphone_3rd: false,
            Playstation_3rd: false,
            Stream_3rd: false,
            Accessories_3rd: false,

            Camera_conference_3rd: false,
            Computer_nuc_3rd: false,

            Computer_aps_3rd: false,
            Computer_msi_3rd: false,
            Computer_intel_3rd: false,
            Computer_accer_3rd: false,
            Computer_assus_3rd: false,
            Computer_dell_3rd: false,

            CPU_3rd: false,
            Main_3rd: false,
            VGA_3rd: false,
            Ram_3rd: false,
            SSD_3rd: false,
            HDD_3rd: false,
            PSU_3rd: false,
            Case_3rd: false,
            Heatsink_3rd: false,
            Fan_3rd: false,
            Custom_3rd: false,

            Chair_gaming_3rd: false,
            Table_gaming_3rd: false,
            Accessories_gaming_3rd: false,

            Audio_Headphone_3rd: false,
            Speaker_3rd: false,
            Sound_card_3rd: false,
            Audio_bigsale_3rd: false,

            Office_mouse_3rd: false,
            Office_keyboard_3rd: false,
            Office_headphone_3rd: false,
            Office_webcam_3rd: false,
            Office_usb_3rd: false,
            Office_harddrive_3rd: false,
            Office_represent_3rd: false,
            Office_balo_3rd: false,
            Office_software_3rd: false,

            Another_smartwatch_3rd: false,
            Another_camerajourney_3rd: false
        })
    }
    Hide_Remotecontrol_Dropdown_3rd(event) {
        event.preventDefault();

        this.setState({ level_3: false });

        setTimeout(() => {
            if (this.state.level_3 === false) {
                this.setState({ Remote_control_3rd: false })
            }
        }, 500);
    }
    Show_Playstation_Dropdown_3rd(event) {
        event.preventDefault();
        this.setState({
            Playstation_3rd: true,
            level_2: true,
            level_3: true,

            Mouse_3rd: false,
            Keyboard_3rd: false,
            Mouse_pads_3rd: false,
            Headphone_3rd: false,
            Remote_control_3rd: false,
            Stream_3rd: false,
            Accessories_3rd: false,

            Camera_conference_3rd: false,
            Computer_nuc_3rd: false,

            Computer_aps_3rd: false,
            Computer_msi_3rd: false,
            Computer_intel_3rd: false,
            Computer_accer_3rd: false,
            Computer_assus_3rd: false,
            Computer_dell_3rd: false,

            CPU_3rd: false,
            Main_3rd: false,
            VGA_3rd: false,
            Ram_3rd: false,
            SSD_3rd: false,
            HDD_3rd: false,
            PSU_3rd: false,
            Case_3rd: false,
            Heatsink_3rd: false,
            Fan_3rd: false,
            Custom_3rd: false,

            Chair_gaming_3rd: false,
            Table_gaming_3rd: false,
            Accessories_gaming_3rd: false,

            Audio_Headphone_3rd: false,
            Speaker_3rd: false,
            Sound_card_3rd: false,
            Audio_bigsale_3rd: false,

            Office_mouse_3rd: false,
            Office_keyboard_3rd: false,
            Office_headphone_3rd: false,
            Office_webcam_3rd: false,
            Office_usb_3rd: false,
            Office_harddrive_3rd: false,
            Office_represent_3rd: false,
            Office_balo_3rd: false,
            Office_software_3rd: false,

            Another_smartwatch_3rd: false,
            Another_camerajourney_3rd: false
        })
    }
    Hide_Playstation_Dropdown_3rd(event) {
        event.preventDefault();

        this.setState({ level_3: false });

        setTimeout(() => {
            if (this.state.level_3 === false) {
                this.setState({ Playstation_3rd: false })
            }
        }, 500);
    }
    Show_Stream_Dropdown_3rd(event) {
        event.preventDefault();
        this.setState({
            Stream_3rd: true,
            level_2: true,
            level_3: true,

            Mouse_3rd: false,
            Keyboard_3rd: false,
            Mouse_pads_3rd: false,
            Headphone_3rd: false,
            Remote_control_3rd: false,
            Playstation_3rd: false,
            Accessories_3rd: false,

            Camera_conference_3rd: false,
            Computer_nuc_3rd: false,

            Computer_aps_3rd: false,
            Computer_msi_3rd: false,
            Computer_intel_3rd: false,
            Computer_accer_3rd: false,
            Computer_assus_3rd: false,
            Computer_dell_3rd: false,

            CPU_3rd: false,
            Main_3rd: false,
            VGA_3rd: false,
            Ram_3rd: false,
            SSD_3rd: false,
            HDD_3rd: false,
            PSU_3rd: false,
            Case_3rd: false,
            Heatsink_3rd: false,
            Fan_3rd: false,
            Custom_3rd: false,

            Chair_gaming_3rd: false,
            Table_gaming_3rd: false,
            Accessories_gaming_3rd: false,

            Audio_Headphone_3rd: false,
            Speaker_3rd: false,
            Sound_card_3rd: false,
            Audio_bigsale_3rd: false,

            Office_mouse_3rd: false,
            Office_keyboard_3rd: false,
            Office_headphone_3rd: false,
            Office_webcam_3rd: false,
            Office_usb_3rd: false,
            Office_harddrive_3rd: false,
            Office_represent_3rd: false,
            Office_balo_3rd: false,
            Office_software_3rd: false,

            Another_smartwatch_3rd: false,
            Another_camerajourney_3rd: false
        })
    }
    Hide_Stream_Dropdown_3rd(event) {
        event.preventDefault();

        this.setState({ level_3: false });

        setTimeout(() => {
            if (this.state.level_3 === false) {
                this.setState({ Stream_3rd: false })
            }
        }, 300);
    }
    Show_Accessories_Dropdown_3rd(event) {
        event.preventDefault();
        this.setState({
            Accessories_3rd: true,
            level_2: true,
            level_3: true,

            Mouse_3rd: false,
            Keyboard_3rd: false,
            Mouse_pads_3rd: false,
            Headphone_3rd: false,
            Remote_control_3rd: false,
            Playstation_3rd: false,
            Stream_3rd: false,

            Camera_conference_3rd: false,
            Computer_nuc_3rd: false,

            Computer_aps_3rd: false,
            Computer_msi_3rd: false,
            Computer_intel_3rd: false,
            Computer_accer_3rd: false,
            Computer_assus_3rd: false,
            Computer_dell_3rd: false,

            CPU_3rd: false,
            Main_3rd: false,
            VGA_3rd: false,
            Ram_3rd: false,
            SSD_3rd: false,
            HDD_3rd: false,
            PSU_3rd: false,
            Case_3rd: false,
            Heatsink_3rd: false,
            Fan_3rd: false,
            Custom_3rd: false,

            Chair_gaming_3rd: false,
            Table_gaming_3rd: false,
            Accessories_gaming_3rd: false,

            Audio_Headphone_3rd: false,
            Speaker_3rd: false,
            Sound_card_3rd: false,
            Audio_bigsale_3rd: false,

            Office_mouse_3rd: false,
            Office_keyboard_3rd: false,
            Office_headphone_3rd: false,
            Office_webcam_3rd: false,
            Office_usb_3rd: false,
            Office_harddrive_3rd: false,
            Office_represent_3rd: false,
            Office_balo_3rd: false,
            Office_software_3rd: false,

            Another_smartwatch_3rd: false,
            Another_camerajourney_3rd: false
        })
    }
    Hide_Accessories_Dropdown_3rd(event) {
        event.preventDefault();

        this.setState({ level_3: false });

        setTimeout(() => {
            if (this.state.level_3 === false) {
                this.setState({ Accessories_3rd: false })
            }
        }, 300);
    }
    Show_CConference_Dropdown_3rd(event) {
        event.preventDefault();
        this.setState({
            Camera_conference_3rd: true,

            level_2: true,
            level_3: true,

            Mouse_3rd: false,
            Keyboard_3rd: false,
            Mouse_pads_3rd: false,
            Headphone_3rd: false,
            Remote_control_3rd: false,
            Playstation_3rd: false,
            Stream_3rd: false,

            Computer_nuc_3rd: false,

            Computer_aps_3rd: false,
            Computer_msi_3rd: false,
            Computer_intel_3rd: false,
            Computer_accer_3rd: false,
            Computer_assus_3rd: false,
            Computer_dell_3rd: false,

            CPU_3rd: false,
            Main_3rd: false,
            VGA_3rd: false,
            Ram_3rd: false,
            SSD_3rd: false,
            HDD_3rd: false,
            PSU_3rd: false,
            Case_3rd: false,
            Heatsink_3rd: false,
            Fan_3rd: false,
            Custom_3rd: false,

            Chair_gaming_3rd: false,
            Table_gaming_3rd: false,
            Accessories_gaming_3rd: false,

            Audio_Headphone_3rd: false,
            Speaker_3rd: false,
            Sound_card_3rd: false,
            Audio_bigsale_3rd: false,

            Office_mouse_3rd: false,
            Office_keyboard_3rd: false,
            Office_headphone_3rd: false,
            Office_webcam_3rd: false,
            Office_usb_3rd: false,
            Office_harddrive_3rd: false,
            Office_represent_3rd: false,
            Office_balo_3rd: false,
            Office_software_3rd: false,

            Another_smartwatch_3rd: false,
            Another_camerajourney_3rd: false
        })
    }
    Hide_CConference_Dropdown_3rd(event) {
        event.preventDefault();

        this.setState({ level_3: false });

        setTimeout(() => {
            if (this.state.level_3 === false) {
                this.setState({ Camera_conference_3rd: false })
            }
        }, 500);
    }
    Show_Nuccomputer_Dropdown_3rd(event) {
        event.preventDefault();
        this.setState({
            Computer_nuc_3rd: true,

            level_2: true,
            level_3: true,

            Mouse_3rd: false,
            Keyboard_3rd: false,
            Mouse_pads_3rd: false,
            Headphone_3rd: false,
            Remote_control_3rd: false,
            Playstation_3rd: false,
            Stream_3rd: false,

            Camera_conference_3rd: false,

            Computer_aps_3rd: false,
            Computer_msi_3rd: false,
            Computer_intel_3rd: false,
            Computer_accer_3rd: false,
            Computer_assus_3rd: false,
            Computer_dell_3rd: false,

            CPU_3rd: false,
            Main_3rd: false,
            VGA_3rd: false,
            Ram_3rd: false,
            SSD_3rd: false,
            HDD_3rd: false,
            PSU_3rd: false,
            Case_3rd: false,
            Heatsink_3rd: false,
            Fan_3rd: false,
            Custom_3rd: false,

            Chair_gaming_3rd: false,
            Table_gaming_3rd: false,
            Accessories_gaming_3rd: false,

            Audio_Headphone_3rd: false,
            Speaker_3rd: false,
            Sound_card_3rd: false,
            Audio_bigsale_3rd: false,

            Office_mouse_3rd: false,
            Office_keyboard_3rd: false,
            Office_headphone_3rd: false,
            Office_webcam_3rd: false,
            Office_usb_3rd: false,
            Office_harddrive_3rd: false,
            Office_represent_3rd: false,
            Office_balo_3rd: false,
            Office_software_3rd: false,

            Another_smartwatch_3rd: false,
            Another_camerajourney_3rd: false
        })
    }
    Hide_Nuccomputer_Dropdown_3rd(event) {
        event.preventDefault();

        this.setState({ level_3: false });

        setTimeout(() => {
            if (this.state.level_3 === false) {
                this.setState({ Computer_nuc_3rd: false })
            }
        }, 500);
    }
    Show_Computeraps_Dropdown_3rd(event) {
        event.preventDefault();
        this.setState({
            Computer_aps_3rd: true,
            level_2: true,
            level_3: true,

            Mouse_3rd: false,
            Keyboard_3rd: false,
            Mouse_pads_3rd: false,
            Headphone_3rd: false,
            Remote_control_3rd: false,
            Playstation_3rd: false,
            Stream_3rd: false,

            Camera_conference_3rd: false,

            Computer_nuc_3rd: false,
            Computer_msi_3rd: false,
            Computer_intel_3rd: false,
            Computer_accer_3rd: false,
            Computer_assus_3rd: false,
            Computer_dell_3rd: false,

            CPU_3rd: false,
            Main_3rd: false,
            VGA_3rd: false,
            Ram_3rd: false,
            SSD_3rd: false,
            HDD_3rd: false,
            PSU_3rd: false,
            Case_3rd: false,
            Heatsink_3rd: false,
            Fan_3rd: false,
            Custom_3rd: false,

            Chair_gaming_3rd: false,
            Table_gaming_3rd: false,
            Accessories_gaming_3rd: false,

            Audio_Headphone_3rd: false,
            Speaker_3rd: false,
            Sound_card_3rd: false,
            Audio_bigsale_3rd: false,

            Office_mouse_3rd: false,
            Office_keyboard_3rd: false,
            Office_headphone_3rd: false,
            Office_webcam_3rd: false,
            Office_usb_3rd: false,
            Office_harddrive_3rd: false,
            Office_represent_3rd: false,
            Office_balo_3rd: false,
            Office_software_3rd: false,

            Another_smartwatch_3rd: false,
            Another_camerajourney_3rd: false
        })
    }
    Hide_Computeraps_Dropdown_3rd(event) {
        event.preventDefault();

        this.setState({ level_3: false });

        setTimeout(() => {
            if (this.state.level_3 === false) {
                this.setState({ Computer_aps_3rd: false })
            }
        }, 500);
    }
    Show_Computermsi_Dropdown_3rd(event) {
        event.preventDefault();
        this.setState({
            Computer_msi_3rd: true,
            level_2: true,
            level_3: true,

            Mouse_3rd: false,
            Keyboard_3rd: false,
            Mouse_pads_3rd: false,
            Headphone_3rd: false,
            Remote_control_3rd: false,
            Playstation_3rd: false,
            Stream_3rd: false,

            Camera_conference_3rd: false,

            Computer_nuc_3rd: false,
            Computer_aps_3rd: false,
            Computer_intel_3rd: false,
            Computer_accer_3rd: false,
            Computer_assus_3rd: false,
            Computer_dell_3rd: false,

            CPU_3rd: false,
            Main_3rd: false,
            VGA_3rd: false,
            Ram_3rd: false,
            SSD_3rd: false,
            HDD_3rd: false,
            PSU_3rd: false,
            Case_3rd: false,
            Heatsink_3rd: false,
            Fan_3rd: false,
            Custom_3rd: false,

            Chair_gaming_3rd: false,
            Table_gaming_3rd: false,
            Accessories_gaming_3rd: false,

            Audio_Headphone_3rd: false,
            Speaker_3rd: false,
            Sound_card_3rd: false,
            Audio_bigsale_3rd: false,

            Office_mouse_3rd: false,
            Office_keyboard_3rd: false,
            Office_headphone_3rd: false,
            Office_webcam_3rd: false,
            Office_usb_3rd: false,
            Office_harddrive_3rd: false,
            Office_represent_3rd: false,
            Office_balo_3rd: false,
            Office_software_3rd: false,

            Another_smartwatch_3rd: false,
            Another_camerajourney_3rd: false
        })
    }
    Hide_Computermsi_Dropdown_3rd(event) {
        event.preventDefault();

        this.setState({ level_3: false });

        setTimeout(() => {
            if (this.state.level_3 === false) {
                this.setState({ Computer_msi_3rd: false })
            }
        }, 500);
    }
    Show_Computerintel_Dropdown_3rd(event) {
        event.preventDefault();
        this.setState({
            Computer_intel_3rd: true,
            level_2: true,
            level_3: true,

            Mouse_3rd: false,
            Keyboard_3rd: false,
            Mouse_pads_3rd: false,
            Headphone_3rd: false,
            Remote_control_3rd: false,
            Playstation_3rd: false,
            Stream_3rd: false,

            Camera_conference_3rd: false,

            Computer_nuc_3rd: false,
            Computer_aps_3rd: false,
            Computer_msi_3rd: false,
            Computer_accer_3rd: false,
            Computer_assus_3rd: false,
            Computer_dell_3rd: false,

            CPU_3rd: false,
            Main_3rd: false,
            VGA_3rd: false,
            Ram_3rd: false,
            SSD_3rd: false,
            HDD_3rd: false,
            PSU_3rd: false,
            Case_3rd: false,
            Heatsink_3rd: false,
            Fan_3rd: false,
            Custom_3rd: false,

            Chair_gaming_3rd: false,
            Table_gaming_3rd: false,
            Accessories_gaming_3rd: false,

            Audio_Headphone_3rd: false,
            Speaker_3rd: false,
            Sound_card_3rd: false,
            Audio_bigsale_3rd: false,

            Office_mouse_3rd: false,
            Office_keyboard_3rd: false,
            Office_headphone_3rd: false,
            Office_webcam_3rd: false,
            Office_usb_3rd: false,
            Office_harddrive_3rd: false,
            Office_represent_3rd: false,
            Office_balo_3rd: false,
            Office_software_3rd: false,

            Another_smartwatch_3rd: false,
            Another_camerajourney_3rd: false
        })
    }
    Hide_Computerintel_Dropdown_3rd(event) {
        event.preventDefault();

        this.setState({ level_3: false });

        setTimeout(() => {
            if (this.state.level_3 === false) {
                this.setState({ Computer_intel_3rd: false })
            }
        }, 500);
    }
    Show_Computeraccer_Dropdown_3rd(event) {
        event.preventDefault();
        this.setState({
            Computer_accer_3rd: true,
            level_2: true,
            level_3: true,

            Mouse_3rd: false,
            Keyboard_3rd: false,
            Mouse_pads_3rd: false,
            Headphone_3rd: false,
            Remote_control_3rd: false,
            Playstation_3rd: false,
            Stream_3rd: false,

            Camera_conference_3rd: false,

            Computer_nuc_3rd: false,
            Computer_aps_3rd: false,
            Computer_msi_3rd: false,
            Computer_assus_3rd: false,
            Computer_dell_3rd: false,

            CPU_3rd: false,
            Main_3rd: false,
            VGA_3rd: false,
            Ram_3rd: false,
            SSD_3rd: false,
            HDD_3rd: false,
            PSU_3rd: false,
            Case_3rd: false,
            Heatsink_3rd: false,
            Fan_3rd: false,
            Custom_3rd: false,

            Chair_gaming_3rd: false,
            Table_gaming_3rd: false,
            Accessories_gaming_3rd: false,

            Audio_Headphone_3rd: false,
            Speaker_3rd: false,
            Sound_card_3rd: false,
            Audio_bigsale_3rd: false,

            Office_mouse_3rd: false,
            Office_keyboard_3rd: false,
            Office_headphone_3rd: false,
            Office_webcam_3rd: false,
            Office_usb_3rd: false,
            Office_harddrive_3rd: false,
            Office_represent_3rd: false,
            Office_balo_3rd: false,
            Office_software_3rd: false,

            Another_smartwatch_3rd: false,
            Another_camerajourney_3rd: false
        })
    }
    Show_Computerdell_Dropdown_3rd(event) {
        event.preventDefault();
        this.setState({
            Computer_dell_3rd: true,
            level_2: true,
            level_3: true,

            Mouse_3rd: false,
            Keyboard_3rd: false,
            Mouse_pads_3rd: false,
            Headphone_3rd: false,
            Remote_control_3rd: false,
            Playstation_3rd: false,
            Stream_3rd: false,

            Camera_conference_3rd: false,

            Computer_nuc_3rd: false,
            Computer_aps_3rd: false,
            Computer_msi_3rd: false,
            Computer_accer_3rd: false,
            Computer_assus_3rd: false,

            CPU_3rd: false,
            Main_3rd: false,
            VGA_3rd: false,
            Ram_3rd: false,
            SSD_3rd: false,
            HDD_3rd: false,
            PSU_3rd: false,
            Case_3rd: false,
            Heatsink_3rd: false,
            Fan_3rd: false,
            Custom_3rd: false,

            Chair_gaming_3rd: false,
            Table_gaming_3rd: false,
            Accessories_gaming_3rd: false,

            Audio_Headphone_3rd: false,
            Speaker_3rd: false,
            Sound_card_3rd: false,
            Audio_bigsale_3rd: false,

            Office_mouse_3rd: false,
            Office_keyboard_3rd: false,
            Office_headphone_3rd: false,
            Office_webcam_3rd: false,
            Office_usb_3rd: false,
            Office_harddrive_3rd: false,
            Office_represent_3rd: false,
            Office_balo_3rd: false,
            Office_software_3rd: false,

            Another_smartwatch_3rd: false,
            Another_camerajourney_3rd: false
        })
    }
    Hide_Computerdell_Dropdown_3rd(event) {
        event.preventDefault();

        this.setState({ level_3: false });

        setTimeout(() => {
            if (this.state.level_3 === false) {
                this.setState({ Computer_dell_3rd: false })
            }
        }, 500);
    }

    Show_CPU_Dropdown_3rd(event) {
        event.preventDefault();
        this.setState({
            CPU_3rd: true,
            level_2: true,
            level_3: true,

            Mouse_3rd: false,
            Keyboard_3rd: false,
            Mouse_pads_3rd: false,
            Headphone_3rd: false,
            Remote_control_3rd: false,
            Playstation_3rd: false,
            Stream_3rd: false,

            Camera_conference_3rd: false,

            Computer_nuc_3rd: false,
            Computer_aps_3rd: false,
            Computer_msi_3rd: false,
            Computer_accer_3rd: false,
            Computer_assus_3rd: false,
            Computer_dell_3rd: false,

            Main_3rd: false,
            VGA_3rd: false,
            Ram_3rd: false,
            SSD_3rd: false,
            HDD_3rd: false,
            PSU_3rd: false,
            Case_3rd: false,
            Heatsink_3rd: false,
            Fan_3rd: false,
            Custom_3rd: false,

            Chair_gaming_3rd: false,
            Table_gaming_3rd: false,
            Accessories_gaming_3rd: false,

            Audio_Headphone_3rd: false,
            Speaker_3rd: false,
            Sound_card_3rd: false,
            Audio_bigsale_3rd: false,

            Office_mouse_3rd: false,
            Office_keyboard_3rd: false,
            Office_headphone_3rd: false,
            Office_webcam_3rd: false,
            Office_usb_3rd: false,
            Office_harddrive_3rd: false,
            Office_represent_3rd: false,
            Office_balo_3rd: false,
            Office_software_3rd: false,

            Another_smartwatch_3rd: false,
            Another_camerajourney_3rd: false
        })
    }
    Hide_CPU_Dropdown_3rd(event) {
        event.preventDefault();

        this.setState({ level_3: false });

        setTimeout(() => {
            if (this.state.level_3 === false) {
                this.setState({ CPU_3rd: false })
            }
        }, 500);
    }
    Show_Main_Dropdown_3rd(event) {
        event.preventDefault();
        this.setState({
            Main_3rd: true,
            level_2: true,
            level_3: true,

            Mouse_3rd: false,
            Keyboard_3rd: false,
            Mouse_pads_3rd: false,
            Headphone_3rd: false,
            Remote_control_3rd: false,
            Playstation_3rd: false,
            Stream_3rd: false,

            Camera_conference_3rd: false,

            Computer_nuc_3rd: false,
            Computer_aps_3rd: false,
            Computer_msi_3rd: false,
            Computer_accer_3rd: false,
            Computer_assus_3rd: false,
            Computer_dell_3rd: false,

            CPU_3rd: false,
            VGA_3rd: false,
            Ram_3rd: false,
            SSD_3rd: false,
            HDD_3rd: false,
            PSU_3rd: false,
            Case_3rd: false,
            Heatsink_3rd: false,
            Fan_3rd: false,
            Custom_3rd: false,

            Chair_gaming_3rd: false,
            Table_gaming_3rd: false,
            Accessories_gaming_3rd: false,

            Audio_Headphone_3rd: false,
            Speaker_3rd: false,
            Sound_card_3rd: false,
            Audio_bigsale_3rd: false,

            Office_mouse_3rd: false,
            Office_keyboard_3rd: false,
            Office_headphone_3rd: false,
            Office_webcam_3rd: false,
            Office_usb_3rd: false,
            Office_harddrive_3rd: false,
            Office_represent_3rd: false,
            Office_balo_3rd: false,
            Office_software_3rd: false,

            Another_smartwatch_3rd: false,
            Another_camerajourney_3rd: false
        })
    }
    Hide_Main_Dropdown_3rd(event) {
        event.preventDefault();

        this.setState({ level_3: false });

        setTimeout(() => {
            if (this.state.level_3 === false) {
                this.setState({ Main_3rd: false })
            }
        }, 500);
    }
    Show_VGA_Dropdown_3rd(event) {
        event.preventDefault();
        this.setState({
            VGA_3rd: true,
            level_2: true,
            level_3: true,

            Mouse_3rd: false,
            Keyboard_3rd: false,
            Mouse_pads_3rd: false,
            Headphone_3rd: false,
            Remote_control_3rd: false,
            Playstation_3rd: false,
            Stream_3rd: false,

            Camera_conference_3rd: false,

            Computer_nuc_3rd: false,
            Computer_aps_3rd: false,
            Computer_msi_3rd: false,
            Computer_accer_3rd: false,
            Computer_assus_3rd: false,
            Computer_dell_3rd: false,

            Main_3rd: false,
            Ram_3rd: false,
            SSD_3rd: false,
            HDD_3rd: false,
            PSU_3rd: false,
            Case_3rd: false,
            Heatsink_3rd: false,
            Fan_3rd: false,
            Custom_3rd: false,

            Chair_gaming_3rd: false,
            Table_gaming_3rd: false,
            Accessories_gaming_3rd: false,

            Audio_Headphone_3rd: false,
            Speaker_3rd: false,
            Sound_card_3rd: false,
            Audio_bigsale_3rd: false,

            Office_mouse_3rd: false,
            Office_keyboard_3rd: false,
            Office_headphone_3rd: false,
            Office_webcam_3rd: false,
            Office_usb_3rd: false,
            Office_harddrive_3rd: false,
            Office_represent_3rd: false,
            Office_balo_3rd: false,
            Office_software_3rd: false,

            Another_smartwatch_3rd: false,
            Another_camerajourney_3rd: false
        })
    }
    Hide_VGA_Dropdown_3rd(event) {
        event.preventDefault();

        this.setState({ level_3: false });

        setTimeout(() => {
            if (this.state.level_3 === false) {
                this.setState({ VGA_3rd: false })
            }
        }, 500);
    }
    Show_RAM_Dropdown_3rd(event) {
        event.preventDefault();
        this.setState({
            Ram_3rd: true,
            level_2: true,
            level_3: true,

            Mouse_3rd: false,
            Keyboard_3rd: false,
            Mouse_pads_3rd: false,
            Headphone_3rd: false,
            Remote_control_3rd: false,
            Playstation_3rd: false,
            Stream_3rd: false,

            Camera_conference_3rd: false,

            Computer_nuc_3rd: false,
            Computer_aps_3rd: false,
            Computer_msi_3rd: false,
            Computer_accer_3rd: false,
            Computer_assus_3rd: false,
            Computer_dell_3rd: false,

            Main_3rd: false,
            VGA_3rd: false,
            SSD_3rd: false,
            HDD_3rd: false,
            PSU_3rd: false,
            Case_3rd: false,
            Heatsink_3rd: false,
            Fan_3rd: false,
            Custom_3rd: false,

            Chair_gaming_3rd: false,
            Table_gaming_3rd: false,
            Accessories_gaming_3rd: false,

            Audio_Headphone_3rd: false,
            Speaker_3rd: false,
            Sound_card_3rd: false,
            Audio_bigsale_3rd: false,

            Office_mouse_3rd: false,
            Office_keyboard_3rd: false,
            Office_headphone_3rd: false,
            Office_webcam_3rd: false,
            Office_usb_3rd: false,
            Office_harddrive_3rd: false,
            Office_represent_3rd: false,
            Office_balo_3rd: false,
            Office_software_3rd: false,

            Another_smartwatch_3rd: false,
            Another_camerajourney_3rd: false
        })
    }
    Hide_RAM_Dropdown_3rd(event) {
        event.preventDefault();

        this.setState({ level_3: false });

        setTimeout(() => {
            if (this.state.level_3 === false) {
                this.setState({ Ram_3rd: false })
            }
        }, 500);
    }
    Show_SSD_Dropdown_3rd(event) {
        event.preventDefault();
        this.setState({
            SSD_3rd: true,
            level_2: true,
            level_3: true,

            Mouse_3rd: false,
            Keyboard_3rd: false,
            Mouse_pads_3rd: false,
            Headphone_3rd: false,
            Remote_control_3rd: false,
            Playstation_3rd: false,
            Stream_3rd: false,

            Camera_conference_3rd: false,

            Computer_nuc_3rd: false,
            Computer_aps_3rd: false,
            Computer_msi_3rd: false,
            Computer_accer_3rd: false,
            Computer_assus_3rd: false,
            Computer_dell_3rd: false,

            Main_3rd: false,
            VGA_3rd: false,
            Ram_3rd: false,
            HDD_3rd: false,
            PSU_3rd: false,
            Case_3rd: false,
            Heatsink_3rd: false,
            Fan_3rd: false,
            Custom_3rd: false,

            Chair_gaming_3rd: false,
            Table_gaming_3rd: false,
            Accessories_gaming_3rd: false,

            Audio_Headphone_3rd: false,
            Speaker_3rd: false,
            Sound_card_3rd: false,
            Audio_bigsale_3rd: false,

            Office_mouse_3rd: false,
            Office_keyboard_3rd: false,
            Office_headphone_3rd: false,
            Office_webcam_3rd: false,
            Office_usb_3rd: false,
            Office_harddrive_3rd: false,
            Office_represent_3rd: false,
            Office_balo_3rd: false,
            Office_software_3rd: false,

            Another_smartwatch_3rd: false,
            Another_camerajourney_3rd: false
        })
    }
    Hide_SSD_Dropdown_3rd(event) {
        event.preventDefault();

        this.setState({ level_3: false });

        setTimeout(() => {
            if (this.state.level_3 === false) {
                this.setState({ SSD_3rd: false })
            }
        }, 500);
    }
    Show_HDD_Dropdown_3rd(event) {
        event.preventDefault();
        this.setState({
            HDD_3rd: true,
            level_2: true,
            level_3: true,

            Mouse_3rd: false,
            Keyboard_3rd: false,
            Mouse_pads_3rd: false,
            Headphone_3rd: false,
            Remote_control_3rd: false,
            Playstation_3rd: false,
            Stream_3rd: false,

            Camera_conference_3rd: false,

            Computer_nuc_3rd: false,
            Computer_aps_3rd: false,
            Computer_msi_3rd: false,
            Computer_accer_3rd: false,
            Computer_assus_3rd: false,
            Computer_dell_3rd: false,

            Main_3rd: false,
            VGA_3rd: false,
            Ram_3rd: false,
            SSD_3rd: false,
            PSU_3rd: false,
            Case_3rd: false,
            Heatsink_3rd: false,
            Fan_3rd: false,
            Custom_3rd: false,

            Chair_gaming_3rd: false,
            Table_gaming_3rd: false,
            Accessories_gaming_3rd: false,

            Audio_Headphone_3rd: false,
            Speaker_3rd: false,
            Sound_card_3rd: false,
            Audio_bigsale_3rd: false,

            Office_mouse_3rd: false,
            Office_keyboard_3rd: false,
            Office_headphone_3rd: false,
            Office_webcam_3rd: false,
            Office_usb_3rd: false,
            Office_harddrive_3rd: false,
            Office_represent_3rd: false,
            Office_balo_3rd: false,
            Office_software_3rd: false,

            Another_smartwatch_3rd: false,
            Another_camerajourney_3rd: false
        })
    }
    Hide_HDD_Dropdown_3rd(event) {
        event.preventDefault();

        this.setState({ level_3: false });

        setTimeout(() => {
            if (this.state.level_3 === false) {
                this.setState({ HDD_3rd: false })
            }
        }, 500);
    }
    Show_PSU_Dropdown_3rd(event) {
        event.preventDefault();
        this.setState({
            PSU_3rd: true,
            level_2: true,
            level_3: true,

            Mouse_3rd: false,
            Keyboard_3rd: false,
            Mouse_pads_3rd: false,
            Headphone_3rd: false,
            Remote_control_3rd: false,
            Playstation_3rd: false,
            Stream_3rd: false,

            Camera_conference_3rd: false,

            Computer_nuc_3rd: false,
            Computer_aps_3rd: false,
            Computer_msi_3rd: false,
            Computer_accer_3rd: false,
            Computer_assus_3rd: false,
            Computer_dell_3rd: false,

            Main_3rd: false,
            VGA_3rd: false,
            Ram_3rd: false,
            HDD_3rd: false,
            SSD_3rd: false,
            Case_3rd: false,
            Heatsink_3rd: false,
            Fan_3rd: false,
            Custom_3rd: false,

            Chair_gaming_3rd: false,
            Table_gaming_3rd: false,
            Accessories_gaming_3rd: false,

            Audio_Headphone_3rd: false,
            Speaker_3rd: false,
            Sound_card_3rd: false,
            Audio_bigsale_3rd: false,

            Office_mouse_3rd: false,
            Office_keyboard_3rd: false,
            Office_headphone_3rd: false,
            Office_webcam_3rd: false,
            Office_usb_3rd: false,
            Office_harddrive_3rd: false,
            Office_represent_3rd: false,
            Office_balo_3rd: false,
            Office_software_3rd: false,

            Another_smartwatch_3rd: false,
            Another_camerajourney_3rd: false
        })
    }
    Hide_PSU_Dropdown_3rd(event) {
        event.preventDefault();

        this.setState({ level_3: false });

        setTimeout(() => {
            if (this.state.level_3 === false) {
                this.setState({ PSU_3rd: false })
            }
        }, 500);
    }
    Show_CASE_Dropdown_3rd(event) {
        event.preventDefault();
        this.setState({
            Case_3rd: true,
            level_2: true,
            level_3: true,

            Mouse_3rd: false,
            Keyboard_3rd: false,
            Mouse_pads_3rd: false,
            Headphone_3rd: false,
            Remote_control_3rd: false,
            Playstation_3rd: false,
            Stream_3rd: false,

            Camera_conference_3rd: false,

            Computer_nuc_3rd: false,
            Computer_aps_3rd: false,
            Computer_msi_3rd: false,
            Computer_accer_3rd: false,
            Computer_assus_3rd: false,
            Computer_dell_3rd: false,

            Main_3rd: false,
            VGA_3rd: false,
            Ram_3rd: false,
            HDD_3rd: false,
            PSU_3rd: false,
            SSD_3rd: false,
            Heatsink_3rd: false,
            Fan_3rd: false,
            Custom_3rd: false,

            Chair_gaming_3rd: false,
            Table_gaming_3rd: false,
            Accessories_gaming_3rd: false,

            Audio_Headphone_3rd: false,
            Speaker_3rd: false,
            Sound_card_3rd: false,
            Audio_bigsale_3rd: false,

            Office_mouse_3rd: false,
            Office_keyboard_3rd: false,
            Office_headphone_3rd: false,
            Office_webcam_3rd: false,
            Office_usb_3rd: false,
            Office_harddrive_3rd: false,
            Office_represent_3rd: false,
            Office_balo_3rd: false,
            Office_software_3rd: false,

            Another_smartwatch_3rd: false,
            Another_camerajourney_3rd: false
        })
    }
    Hide_CASE_Dropdown_3rd(event) {
        event.preventDefault();

        this.setState({ level_3: false });

        setTimeout(() => {
            if (this.state.level_3 === false) {
                this.setState({ Case_3rd: false })
            }
        }, 500);
    }
    Show_Heatsink_Dropdown_3rd(event) {
        event.preventDefault();
        this.setState({
            Heatsink_3rd: true,
            level_2: true,
            level_3: true,

            Mouse_3rd: false,
            Keyboard_3rd: false,
            Mouse_pads_3rd: false,
            Headphone_3rd: false,
            Remote_control_3rd: false,
            Playstation_3rd: false,
            Stream_3rd: false,

            Camera_conference_3rd: false,

            Computer_nuc_3rd: false,
            Computer_aps_3rd: false,
            Computer_msi_3rd: false,
            Computer_accer_3rd: false,
            Computer_assus_3rd: false,
            Computer_dell_3rd: false,

            Main_3rd: false,
            VGA_3rd: false,
            Ram_3rd: false,
            HDD_3rd: false,
            PSU_3rd: false,
            Case_3rd: false,
            SSD_3rd: false,
            Fan_3rd: false,
            Custom_3rd: false,

            Chair_gaming_3rd: false,
            Table_gaming_3rd: false,
            Accessories_gaming_3rd: false,

            Audio_Headphone_3rd: false,
            Speaker_3rd: false,
            Sound_card_3rd: false,
            Audio_bigsale_3rd: false,

            Office_mouse_3rd: false,
            Office_keyboard_3rd: false,
            Office_headphone_3rd: false,
            Office_webcam_3rd: false,
            Office_usb_3rd: false,
            Office_harddrive_3rd: false,
            Office_represent_3rd: false,
            Office_balo_3rd: false,
            Office_software_3rd: false,

            Another_smartwatch_3rd: false,
            Another_camerajourney_3rd: false
        })
    }
    Hide_Heatsink_Dropdown_3rd(event) {
        event.preventDefault();

        this.setState({ level_3: false });

        setTimeout(() => {
            if (this.state.level_3 === false) {
                this.setState({ Heatsink_3rd: false })
            }
        }, 500);
    }
    Show_Fan_Dropdown_3rd(event) {
        event.preventDefault();
        this.setState({
            Fan_3rd: true,
            level_2: true,
            level_3: true,

            Mouse_3rd: false,
            Keyboard_3rd: false,
            Mouse_pads_3rd: false,
            Headphone_3rd: false,
            Remote_control_3rd: false,
            Playstation_3rd: false,
            Stream_3rd: false,

            Camera_conference_3rd: false,

            Computer_nuc_3rd: false,
            Computer_aps_3rd: false,
            Computer_msi_3rd: false,
            Computer_accer_3rd: false,
            Computer_assus_3rd: false,
            Computer_dell_3rd: false,

            Main_3rd: false,
            VGA_3rd: false,
            Ram_3rd: false,
            HDD_3rd: false,
            PSU_3rd: false,
            Case_3rd: false,
            Heatsink_3rd: false,
            SSD_3rd: false,
            Custom_3rd: false,

            Chair_gaming_3rd: false,
            Table_gaming_3rd: false,
            Accessories_gaming_3rd: false,

            Audio_Headphone_3rd: false,
            Speaker_3rd: false,
            Sound_card_3rd: false,
            Audio_bigsale_3rd: false,

            Office_mouse_3rd: false,
            Office_keyboard_3rd: false,
            Office_headphone_3rd: false,
            Office_webcam_3rd: false,
            Office_usb_3rd: false,
            Office_harddrive_3rd: false,
            Office_represent_3rd: false,
            Office_balo_3rd: false,
            Office_software_3rd: false,

            Another_smartwatch_3rd: false,
            Another_camerajourney_3rd: false
        })
    }
    Hide_Fan_Dropdown_3rd(event) {
        event.preventDefault();

        this.setState({ level_3: false });

        setTimeout(() => {
            if (this.state.level_3 === false) {
                this.setState({ Fan_3rd: false })
            }
        }, 500);
    }
    Show_Fancustom_Dropdown_3rd(event) {
        event.preventDefault();
        this.setState({
            Custom_3rd: true,
            level_2: true,
            level_3: true,

            Mouse_3rd: false,
            Keyboard_3rd: false,
            Mouse_pads_3rd: false,
            Headphone_3rd: false,
            Remote_control_3rd: false,
            Playstation_3rd: false,
            Stream_3rd: false,

            Camera_conference_3rd: false,

            Computer_nuc_3rd: false,
            Computer_aps_3rd: false,
            Computer_msi_3rd: false,
            Computer_accer_3rd: false,
            Computer_assus_3rd: false,
            Computer_dell_3rd: false,

            Main_3rd: false,
            VGA_3rd: false,
            Ram_3rd: false,
            HDD_3rd: false,
            PSU_3rd: false,
            Case_3rd: false,
            Heatsink_3rd: false,
            Fan_3rd: false,
            SSD_3rd: false,

            Chair_gaming_3rd: false,
            Table_gaming_3rd: false,
            Accessories_gaming_3rd: false,

            Audio_Headphone_3rd: false,
            Speaker_3rd: false,
            Sound_card_3rd: false,
            Audio_bigsale_3rd: false,

            Office_mouse_3rd: false,
            Office_keyboard_3rd: false,
            Office_headphone_3rd: false,
            Office_webcam_3rd: false,
            Office_usb_3rd: false,
            Office_harddrive_3rd: false,
            Office_represent_3rd: false,
            Office_balo_3rd: false,
            Office_software_3rd: false,

            Another_smartwatch_3rd: false,
            Another_camerajourney_3rd: false
        })
    }
    Hide_Fancustom_Dropdown_3rd(event) {
        event.preventDefault();

        this.setState({ level_3: false });

        setTimeout(() => {
            if (this.state.level_3 === false) {
                this.setState({ Custom_3rd: false })
            }
        }, 500);
    }
    Show_ChairGaming_Dropdown_3rd(event) {
        event.preventDefault();
        this.setState({
            Chair_gaming_3rd: true,
            level_2: true,
            level_3: true,

            Mouse_3rd: false,
            Keyboard_3rd: false,
            Mouse_pads_3rd: false,
            Headphone_3rd: false,
            Remote_control_3rd: false,
            Playstation_3rd: false,
            Stream_3rd: false,

            Camera_conference_3rd: false,

            Computer_nuc_3rd: false,
            Computer_aps_3rd: false,
            Computer_msi_3rd: false,
            Computer_accer_3rd: false,
            Computer_assus_3rd: false,
            Computer_dell_3rd: false,

            Main_3rd: false,
            VGA_3rd: false,
            Ram_3rd: false,
            HDD_3rd: false,
            PSU_3rd: false,
            Case_3rd: false,
            Heatsink_3rd: false,
            Fan_3rd: false,
            SSD_3rd: false,
            Custom_3rd: false,

            Table_gaming_3rd: false,
            Accessories_gaming_3rd: false,

            Audio_Headphone_3rd: false,
            Speaker_3rd: false,
            Sound_card_3rd: false,
            Audio_bigsale_3rd: false,

            Office_mouse_3rd: false,
            Office_keyboard_3rd: false,
            Office_headphone_3rd: false,
            Office_webcam_3rd: false,
            Office_usb_3rd: false,
            Office_harddrive_3rd: false,
            Office_represent_3rd: false,
            Office_balo_3rd: false,
            Office_software_3rd: false,

            Another_smartwatch_3rd: false,
            Another_camerajourney_3rd: false
        })
    }
    Hide_ChairGaming_Dropdown_3rd(event) {
        event.preventDefault();

        this.setState({ level_3: false });

        setTimeout(() => {
            if (this.state.level_3 === false) {
                this.setState({ Chair_gaming_3rd: false })
            }
        }, 500);
    }
    Show_TableGaming_Dropdown_3rd(event) {
        event.preventDefault();
        this.setState({
            Table_gaming_3rd: true,
            level_2: true,
            level_3: true,

            Mouse_3rd: false,
            Keyboard_3rd: false,
            Mouse_pads_3rd: false,
            Headphone_3rd: false,
            Remote_control_3rd: false,
            Playstation_3rd: false,
            Stream_3rd: false,

            Camera_conference_3rd: false,

            Computer_nuc_3rd: false,
            Computer_aps_3rd: false,
            Computer_msi_3rd: false,
            Computer_accer_3rd: false,
            Computer_assus_3rd: false,
            Computer_dell_3rd: false,

            Main_3rd: false,
            VGA_3rd: false,
            Ram_3rd: false,
            HDD_3rd: false,
            PSU_3rd: false,
            Case_3rd: false,
            Heatsink_3rd: false,
            Fan_3rd: false,
            SSD_3rd: false,
            Custom_3rd: false,

            Chair_gaming_3rd: false,
            Accessories_gaming_3rd: false,

            Audio_Headphone_3rd: false,
            Speaker_3rd: false,
            Sound_card_3rd: false,
            Audio_bigsale_3rd: false,

            Office_mouse_3rd: false,
            Office_keyboard_3rd: false,
            Office_headphone_3rd: false,
            Office_webcam_3rd: false,
            Office_usb_3rd: false,
            Office_harddrive_3rd: false,
            Office_represent_3rd: false,
            Office_balo_3rd: false,
            Office_software_3rd: false,

            Another_smartwatch_3rd: false,
            Another_camerajourney_3rd: false
        })
    }
    Hide_TableGaming_Dropdown_3rd(event) {
        event.preventDefault();

        this.setState({ level_3: false });

        setTimeout(() => {
            if (this.state.level_3 === false) {
                this.setState({ Table_gaming_3rd: false })
            }
        }, 500);
    }
    Show_AccessoriesGaming_Dropdown_3rd(event) {
        event.preventDefault();
        this.setState({
            Accessories_gaming_3rd: true,
            level_2: true,
            level_3: true,

            Mouse_3rd: false,
            Keyboard_3rd: false,
            Mouse_pads_3rd: false,
            Headphone_3rd: false,
            Remote_control_3rd: false,
            Playstation_3rd: false,
            Stream_3rd: false,

            Camera_conference_3rd: false,

            Computer_nuc_3rd: false,
            Computer_aps_3rd: false,
            Computer_msi_3rd: false,
            Computer_accer_3rd: false,
            Computer_assus_3rd: false,
            Computer_dell_3rd: false,

            Main_3rd: false,
            VGA_3rd: false,
            Ram_3rd: false,
            HDD_3rd: false,
            PSU_3rd: false,
            Case_3rd: false,
            Heatsink_3rd: false,
            Fan_3rd: false,
            SSD_3rd: false,
            Custom_3rd: false,

            Chair_gaming_3rd: false,
            Table_gaming_3rd: false,

            Audio_Headphone_3rd: false,
            Speaker_3rd: false,
            Sound_card_3rd: false,
            Audio_bigsale_3rd: false,

            Office_mouse_3rd: false,
            Office_keyboard_3rd: false,
            Office_headphone_3rd: false,
            Office_webcam_3rd: false,
            Office_usb_3rd: false,
            Office_harddrive_3rd: false,
            Office_represent_3rd: false,
            Office_balo_3rd: false,
            Office_software_3rd: false,

            Another_smartwatch_3rd: false,
            Another_camerajourney_3rd: false
        })
    }
    Hide_AccessoriesGaming_Dropdown_3rd(event) {
        event.preventDefault();

        this.setState({ level_3: false });

        setTimeout(() => {
            if (this.state.level_3 === false) {
                this.setState({ Accessories_gaming_3rd: false })
            }
        }, 500);
    }
    Show_Audio_Headphone_Dropdown_3rd(event) {
        event.preventDefault();
        this.setState({
            Audio_Headphone_3rd: true,
            level_2: true,
            level_3: true,

            Mouse_3rd: false,
            Keyboard_3rd: false,
            Mouse_pads_3rd: false,
            Headphone_3rd: false,
            Remote_control_3rd: false,
            Playstation_3rd: false,
            Stream_3rd: false,

            Camera_conference_3rd: false,

            Computer_nuc_3rd: false,
            Computer_aps_3rd: false,
            Computer_msi_3rd: false,
            Computer_accer_3rd: false,
            Computer_assus_3rd: false,
            Computer_dell_3rd: false,

            Main_3rd: false,
            VGA_3rd: false,
            Ram_3rd: false,
            HDD_3rd: false,
            PSU_3rd: false,
            Case_3rd: false,
            Heatsink_3rd: false,
            Fan_3rd: false,
            SSD_3rd: false,
            Custom_3rd: false,

            Chair_gaming_3rd: false,
            Table_gaming_3rd: false,
            Accessories_gaming_3rd: false,

            Speaker_3rd: false,
            Sound_card_3rd: false,
            Audio_bigsale_3rd: false,

            Office_mouse_3rd: false,
            Office_keyboard_3rd: false,
            Office_headphone_3rd: false,
            Office_webcam_3rd: false,
            Office_usb_3rd: false,
            Office_harddrive_3rd: false,
            Office_represent_3rd: false,
            Office_balo_3rd: false,
            Office_software_3rd: false,

            Another_smartwatch_3rd: false,
            Another_camerajourney_3rd: false
        })
    }
    Hide_Audio_Headphone_Dropdown_3rd(event) {
        event.preventDefault();

        this.setState({ level_3: false });

        setTimeout(() => {
            if (this.state.level_3 === false) {
                this.setState({ Audio_Headphone_3rd: false })
            }
        }, 1000);
    }
    Show_Speaker_Dropdown_3rd(event) {
        event.preventDefault();
        this.setState({
            Speaker_3rd: true,
            level_2: true,
            level_3: true,

            Mouse_3rd: false,
            Keyboard_3rd: false,
            Mouse_pads_3rd: false,
            Headphone_3rd: false,
            Remote_control_3rd: false,
            Playstation_3rd: false,
            Stream_3rd: false,

            Camera_conference_3rd: false,

            Computer_nuc_3rd: false,
            Computer_aps_3rd: false,
            Computer_msi_3rd: false,
            Computer_accer_3rd: false,
            Computer_assus_3rd: false,
            Computer_dell_3rd: false,

            Main_3rd: false,
            VGA_3rd: false,
            Ram_3rd: false,
            HDD_3rd: false,
            PSU_3rd: false,
            Case_3rd: false,
            Heatsink_3rd: false,
            Fan_3rd: false,
            SSD_3rd: false,
            Custom_3rd: false,

            Chair_gaming_3rd: false,
            Accessories_gaming_3rd: false,
            Table_gaming_3rd: false,

            Audio_Headphone_3rd: false,
            Sound_card_3rd: false,
            Audio_bigsale_3rd: false,

            Office_mouse_3rd: false,
            Office_keyboard_3rd: false,
            Office_headphone_3rd: false,
            Office_webcam_3rd: false,
            Office_usb_3rd: false,
            Office_harddrive_3rd: false,
            Office_represent_3rd: false,
            Office_balo_3rd: false,
            Office_software_3rd: false,

            Another_smartwatch_3rd: false,
            Another_camerajourney_3rd: false
        })
    }
    Hide_Speaker_Dropdown_3rd(event) {
        event.preventDefault();

        this.setState({ level_3: false });

        setTimeout(() => {
            if (this.state.level_3 === false) {
                this.setState({ Speaker_3rd: false })
            }
        }, 500);
    }
    Show_SoundCard_Dropdown_3rd(event) {
        event.preventDefault();
        this.setState({
            Sound_card_3rd: true,
            level_2: true,
            level_3: true,

            Mouse_3rd: false,
            Keyboard_3rd: false,
            Mouse_pads_3rd: false,
            Headphone_3rd: false,
            Remote_control_3rd: false,
            Playstation_3rd: false,
            Stream_3rd: false,

            Camera_conference_3rd: false,

            Computer_nuc_3rd: false,
            Computer_aps_3rd: false,
            Computer_msi_3rd: false,
            Computer_accer_3rd: false,
            Computer_assus_3rd: false,
            Computer_dell_3rd: false,

            Main_3rd: false,
            VGA_3rd: false,
            Ram_3rd: false,
            HDD_3rd: false,
            PSU_3rd: false,
            Case_3rd: false,
            Heatsink_3rd: false,
            Fan_3rd: false,
            SSD_3rd: false,
            Custom_3rd: false,

            Chair_gaming_3rd: false,
            Table_gaming_3rd: false,
            Accessories_gaming_3rd: false,

            Audio_Headphone_3rd: false,
            Speaker_3rd: false,
            Audio_bigsale_3rd: false,

            Office_mouse_3rd: false,
            Office_keyboard_3rd: false,
            Office_headphone_3rd: false,
            Office_webcam_3rd: false,
            Office_usb_3rd: false,
            Office_harddrive_3rd: false,
            Office_represent_3rd: false,
            Office_balo_3rd: false,
            Office_software_3rd: false,

            Another_smartwatch_3rd: false,
            Another_camerajourney_3rd: false
        })
    }
    Hide_SoundCard_Dropdown_3rd(event) {
        event.preventDefault();

        this.setState({ level_3: false });

        setTimeout(() => {
            if (this.state.level_3 === false) {
                this.setState({ Sound_card_3rd: false })
            }
        }, 500);
    }
    Show_AudioBigSale_Dropdown_3rd(event) {
        event.preventDefault();
        this.setState({
            Audio_bigsale_3rd: true,
            level_2: true,
            level_3: true,

            Mouse_3rd: false,
            Keyboard_3rd: false,
            Mouse_pads_3rd: false,
            Headphone_3rd: false,
            Remote_control_3rd: false,
            Playstation_3rd: false,
            Stream_3rd: false,

            Camera_conference_3rd: false,

            Computer_nuc_3rd: false,
            Computer_aps_3rd: false,
            Computer_msi_3rd: false,
            Computer_accer_3rd: false,
            Computer_assus_3rd: false,
            Computer_dell_3rd: false,

            Main_3rd: false,
            VGA_3rd: false,
            Ram_3rd: false,
            HDD_3rd: false,
            PSU_3rd: false,
            Case_3rd: false,
            Heatsink_3rd: false,
            Fan_3rd: false,
            SSD_3rd: false,
            Custom_3rd: false,

            Chair_gaming_3rd: false,
            Table_gaming_3rd: false,
            Accessories_gaming_3rd: false,

            Audio_Headphone_3rd: false,
            Speaker_3rd: false,
            Sound_card_3rd: false,

            Office_mouse_3rd: false,
            Office_keyboard_3rd: false,
            Office_headphone_3rd: false,
            Office_webcam_3rd: false,
            Office_usb_3rd: false,
            Office_harddrive_3rd: false,
            Office_represent_3rd: false,
            Office_balo_3rd: false,
            Office_software_3rd: false,

            Another_smartwatch_3rd: false,
            Another_camerajourney_3rd: false
        })
    }
    Hide_AudioBigSale_Dropdown_3rd(event) {
        event.preventDefault();

        this.setState({ level_3: false });

        setTimeout(() => {
            if (this.state.level_3 === false) {
                this.setState({ Audio_bigsale_3rd: false })
            }
        }, 500);
    }
    Show_OfficeMouse_Dropdown_3rd(event) {
        event.preventDefault();
        this.setState({
            Office_mouse_3rd: true,
            level_2: true,
            level_3: true,

            Mouse_3rd: false,
            Keyboard_3rd: false,
            Mouse_pads_3rd: false,
            Headphone_3rd: false,
            Remote_control_3rd: false,
            Playstation_3rd: false,
            Stream_3rd: false,

            Camera_conference_3rd: false,

            Computer_nuc_3rd: false,
            Computer_aps_3rd: false,
            Computer_msi_3rd: false,
            Computer_accer_3rd: false,
            Computer_assus_3rd: false,
            Computer_dell_3rd: false,

            Main_3rd: false,
            VGA_3rd: false,
            Ram_3rd: false,
            HDD_3rd: false,
            PSU_3rd: false,
            Case_3rd: false,
            Heatsink_3rd: false,
            Fan_3rd: false,
            SSD_3rd: false,
            Custom_3rd: false,

            Chair_gaming_3rd: false,
            Table_gaming_3rd: false,
            Accessories_gaming_3rd: false,

            Audio_Headphone_3rd: false,
            Speaker_3rd: false,
            Sound_card_3rd: false,
            Audio_bigsale_3rd: false,

            Office_keyboard_3rd: false,
            Office_headphone_3rd: false,
            Office_webcam_3rd: false,
            Office_usb_3rd: false,
            Office_harddrive_3rd: false,
            Office_represent_3rd: false,
            Office_balo_3rd: false,
            Office_software_3rd: false,

            Another_smartwatch_3rd: false,
            Another_camerajourney_3rd: false
        })
    }
    Hide_OfficeMouse_Dropdown_3rd(event) {
        event.preventDefault();

        this.setState({ level_3: false });

        setTimeout(() => {
            if (this.state.level_3 === false) {
                this.setState({ Office_mouse_3rd: false })
            }
        }, 500);
    }
    Show_OfficeKeyboard_Dropdown_3rd(event) {
        event.preventDefault();
        this.setState({
            Office_keyboard_3rd: true,
            level_2: true,
            level_3: true,

            Mouse_3rd: false,
            Keyboard_3rd: false,
            Mouse_pads_3rd: false,
            Headphone_3rd: false,
            Remote_control_3rd: false,
            Playstation_3rd: false,
            Stream_3rd: false,

            Camera_conference_3rd: false,

            Computer_nuc_3rd: false,
            Computer_aps_3rd: false,
            Computer_msi_3rd: false,
            Computer_accer_3rd: false,
            Computer_assus_3rd: false,
            Computer_dell_3rd: false,

            Main_3rd: false,
            VGA_3rd: false,
            Ram_3rd: false,
            HDD_3rd: false,
            PSU_3rd: false,
            Case_3rd: false,
            Heatsink_3rd: false,
            Fan_3rd: false,
            SSD_3rd: false,
            Custom_3rd: false,

            Chair_gaming_3rd: false,
            Table_gaming_3rd: false,
            Accessories_gaming_3rd: false,

            Audio_Headphone_3rd: false,
            Speaker_3rd: false,
            Sound_card_3rd: false,
            Audio_bigsale_3rd: false,

            Office_mouse_3rd: false,
            Office_headphone_3rd: false,
            Office_webcam_3rd: false,
            Office_usb_3rd: false,
            Office_harddrive_3rd: false,
            Office_represent_3rd: false,
            Office_balo_3rd: false,
            Office_software_3rd: false,

            Another_smartwatch_3rd: false,
            Another_camerajourney_3rd: false
        })
    }
    Hide_OfficeKeyboard_Dropdown_3rd(event) {
        event.preventDefault();

        this.setState({ level_3: false });

        setTimeout(() => {
            if (this.state.level_3 === false) {
                this.setState({ Office_keyboard_3rd: false })
            }
        }, 500);
    }
    Show_OfficeHeadphone_Dropdown_3rd(event) {
        event.preventDefault();
        this.setState({
            Office_headphone_3rd: true,
            level_2: true,
            level_3: true,

            Mouse_3rd: false,
            Keyboard_3rd: false,
            Mouse_pads_3rd: false,
            Headphone_3rd: false,
            Remote_control_3rd: false,
            Playstation_3rd: false,
            Stream_3rd: false,

            Camera_conference_3rd: false,

            Computer_nuc_3rd: false,
            Computer_aps_3rd: false,
            Computer_msi_3rd: false,
            Computer_accer_3rd: false,
            Computer_assus_3rd: false,
            Computer_dell_3rd: false,

            Main_3rd: false,
            VGA_3rd: false,
            Ram_3rd: false,
            HDD_3rd: false,
            PSU_3rd: false,
            Case_3rd: false,
            Heatsink_3rd: false,
            Fan_3rd: false,
            SSD_3rd: false,
            Custom_3rd: false,

            Chair_gaming_3rd: false,
            Table_gaming_3rd: false,
            Accessories_gaming_3rd: false,

            Audio_Headphone_3rd: false,
            Speaker_3rd: false,
            Sound_card_3rd: false,
            Audio_bigsale_3rd: false,

            Office_mouse_3rd: false,
            Office_keyboard_3rd: false,
            Office_webcam_3rd: false,
            Office_usb_3rd: false,
            Office_harddrive_3rd: false,
            Office_represent_3rd: false,
            Office_balo_3rd: false,
            Office_software_3rd: false,

            Another_smartwatch_3rd: false,
            Another_camerajourney_3rd: false
        })
    }
    Hide_OfficeHeadphone_Dropdown_3rd(event) {
        event.preventDefault();

        this.setState({ level_3: false });

        setTimeout(() => {
            if (this.state.level_3 === false) {
                this.setState({ Office_headphone_3rd: false })
            }
        }, 500);
    }
    Show_OfficeWebcam_Dropdown_3rd(event) {
        event.preventDefault();
        this.setState({
            Office_webcam_3rd: true,
            level_2: true,
            level_3: true,

            Mouse_3rd: false,
            Keyboard_3rd: false,
            Mouse_pads_3rd: false,
            Headphone_3rd: false,
            Remote_control_3rd: false,
            Playstation_3rd: false,
            Stream_3rd: false,

            Camera_conference_3rd: false,

            Computer_nuc_3rd: false,
            Computer_aps_3rd: false,
            Computer_msi_3rd: false,
            Computer_accer_3rd: false,
            Computer_assus_3rd: false,
            Computer_dell_3rd: false,

            Main_3rd: false,
            VGA_3rd: false,
            Ram_3rd: false,
            HDD_3rd: false,
            PSU_3rd: false,
            Case_3rd: false,
            Heatsink_3rd: false,
            Fan_3rd: false,
            SSD_3rd: false,
            Custom_3rd: false,

            Chair_gaming_3rd: false,
            Table_gaming_3rd: false,
            Accessories_gaming_3rd: false,

            Audio_Headphone_3rd: false,
            Speaker_3rd: false,
            Sound_card_3rd: false,
            Audio_bigsale_3rd: false,

            Office_mouse_3rd: false,
            Office_keyboard_3rd: false,
            Office_headphone_3rd: false,
            Office_usb_3rd: false,
            Office_harddrive_3rd: false,
            Office_represent_3rd: false,
            Office_balo_3rd: false,
            Office_software_3rd: false,

            Another_smartwatch_3rd: false,
            Another_camerajourney_3rd: false
        })
    }
    Hide_OfficeWebcam_Dropdown_3rd(event) {
        event.preventDefault();

        this.setState({ level_3: false });

        setTimeout(() => {
            if (this.state.level_3 === false) {
                this.setState({ Office_webcam_3rd: false })
            }
        }, 500);
    }
    Show_OfficeUsb_Dropdown_3rd(event) {
        event.preventDefault();
        this.setState({
            Office_usb_3rd: true,
            level_2: true,
            level_3: true,

            Mouse_3rd: false,
            Keyboard_3rd: false,
            Mouse_pads_3rd: false,
            Headphone_3rd: false,
            Remote_control_3rd: false,
            Playstation_3rd: false,
            Stream_3rd: false,

            Camera_conference_3rd: false,

            Computer_nuc_3rd: false,
            Computer_aps_3rd: false,
            Computer_msi_3rd: false,
            Computer_accer_3rd: false,
            Computer_assus_3rd: false,
            Computer_dell_3rd: false,

            Main_3rd: false,
            VGA_3rd: false,
            Ram_3rd: false,
            HDD_3rd: false,
            PSU_3rd: false,
            Case_3rd: false,
            Heatsink_3rd: false,
            Fan_3rd: false,
            SSD_3rd: false,
            Custom_3rd: false,

            Chair_gaming_3rd: false,
            Table_gaming_3rd: false,
            Accessories_gaming_3rd: false,

            Audio_Headphone_3rd: false,
            Speaker_3rd: false,
            Sound_card_3rd: false,
            Audio_bigsale_3rd: false,

            Office_mouse_3rd: false,
            Office_keyboard_3rd: false,
            Office_headphone_3rd: false,
            Office_webcam_3rd: false,
            Office_harddrive_3rd: false,
            Office_represent_3rd: false,
            Office_balo_3rd: false,
            Office_software_3rd: false,

            Another_smartwatch_3rd: false,
            Another_camerajourney_3rd: false
        })
    }
    Hide_OfficeUsb_Dropdown_3rd(event) {
        event.preventDefault();

        this.setState({ level_3: false });

        setTimeout(() => {
            if (this.state.level_3 === false) {
                this.setState({ Office_usb_3rd: false })
            }
        }, 500);
    }
    Show_OfficeHarddrive_Dropdown_3rd(event) {
        event.preventDefault();
        this.setState({
            Office_harddrive_3rd: true,
            level_2: true,
            level_3: true,

            Mouse_3rd: false,
            Keyboard_3rd: false,
            Mouse_pads_3rd: false,
            Headphone_3rd: false,
            Remote_control_3rd: false,
            Playstation_3rd: false,
            Stream_3rd: false,

            Camera_conference_3rd: false,

            Computer_nuc_3rd: false,
            Computer_aps_3rd: false,
            Computer_msi_3rd: false,
            Computer_accer_3rd: false,
            Computer_assus_3rd: false,
            Computer_dell_3rd: false,

            Main_3rd: false,
            VGA_3rd: false,
            Ram_3rd: false,
            HDD_3rd: false,
            PSU_3rd: false,
            Case_3rd: false,
            Heatsink_3rd: false,
            Fan_3rd: false,
            SSD_3rd: false,
            Custom_3rd: false,

            Chair_gaming_3rd: false,
            Table_gaming_3rd: false,
            Accessories_gaming_3rd: false,

            Audio_Headphone_3rd: false,
            Speaker_3rd: false,
            Sound_card_3rd: false,
            Audio_bigsale_3rd: false,

            Office_mouse_3rd: false,
            Office_keyboard_3rd: false,
            Office_headphone_3rd: false,
            Office_webcam_3rd: false,
            Office_usb_3rd: false,
            Office_represent_3rd: false,
            Office_balo_3rd: false,
            Office_software_3rd: false,

            Another_smartwatch_3rd: false,
            Another_camerajourney_3rd: false
        })
    }
    Hide_OfficeHarddrive_Dropdown_3rd(event) {
        event.preventDefault();

        this.setState({ level_3: false });

        setTimeout(() => {
            if (this.state.level_3 === false) {
                this.setState({ Office_harddrive_3rd: false })
            }
        }, 500);
    }
    Show_OfficeRepresent_Dropdown_3rd(event) {
        event.preventDefault();
        this.setState({
            Office_represent_3rd: true,
            level_2: true,
            level_3: true,

            Mouse_3rd: false,
            Keyboard_3rd: false,
            Mouse_pads_3rd: false,
            Headphone_3rd: false,
            Remote_control_3rd: false,
            Playstation_3rd: false,
            Stream_3rd: false,

            Camera_conference_3rd: false,

            Computer_nuc_3rd: false,
            Computer_aps_3rd: false,
            Computer_msi_3rd: false,
            Computer_accer_3rd: false,
            Computer_assus_3rd: false,
            Computer_dell_3rd: false,

            Main_3rd: false,
            VGA_3rd: false,
            Ram_3rd: false,
            HDD_3rd: false,
            PSU_3rd: false,
            Case_3rd: false,
            Heatsink_3rd: false,
            Fan_3rd: false,
            SSD_3rd: false,
            Custom_3rd: false,

            Chair_gaming_3rd: false,
            Table_gaming_3rd: false,
            Accessories_gaming_3rd: false,

            Audio_Headphone_3rd: false,
            Speaker_3rd: false,
            Sound_card_3rd: false,
            Audio_bigsale_3rd: false,

            Office_mouse_3rd: false,
            Office_keyboard_3rd: false,
            Office_headphone_3rd: false,
            Office_webcam_3rd: false,
            Office_usb_3rd: false,
            Office_harddrive_3rd: false,
            Office_balo_3rd: false,
            Office_software_3rd: false,

            Another_smartwatch_3rd: false,
            Another_camerajourney_3rd: false
        })
    }
    Hide_OfficeRepresent_Dropdown_3rd(event) {
        event.preventDefault();

        this.setState({ level_3: false });

        setTimeout(() => {
            if (this.state.level_3 === false) {
                this.setState({ Office_represent_3rd: false })
            }
        }, 500);
    }
    Show_OfficeBalo_Dropdown_3rd(event) {
        event.preventDefault();
        this.setState({
            Office_balo_3rd: true,
            level_2: true,
            level_3: true,

            Mouse_3rd: false,
            Keyboard_3rd: false,
            Mouse_pads_3rd: false,
            Headphone_3rd: false,
            Remote_control_3rd: false,
            Playstation_3rd: false,
            Stream_3rd: false,

            Camera_conference_3rd: false,

            Computer_nuc_3rd: false,
            Computer_aps_3rd: false,
            Computer_msi_3rd: false,
            Computer_accer_3rd: false,
            Computer_assus_3rd: false,
            Computer_dell_3rd: false,

            Main_3rd: false,
            VGA_3rd: false,
            Ram_3rd: false,
            HDD_3rd: false,
            PSU_3rd: false,
            Case_3rd: false,
            Heatsink_3rd: false,
            Fan_3rd: false,
            SSD_3rd: false,
            Custom_3rd: false,

            Chair_gaming_3rd: false,
            Table_gaming_3rd: false,
            Accessories_gaming_3rd: false,

            Audio_Headphone_3rd: false,
            Speaker_3rd: false,
            Sound_card_3rd: false,
            Audio_bigsale_3rd: false,

            Office_mouse_3rd: false,
            Office_keyboard_3rd: false,
            Office_headphone_3rd: false,
            Office_webcam_3rd: false,
            Office_usb_3rd: false,
            Office_harddrive_3rd: false,
            Office_represent_3rd: false,
            Office_software_3rd: false,

            Another_smartwatch_3rd: false,
            Another_camerajourney_3rd: false
        })
    }
    Hide_OfficeBalo_Dropdown_3rd(event) {
        event.preventDefault();

        this.setState({ level_3: false });

        setTimeout(() => {
            if (this.state.level_3 === false) {
                this.setState({ Office_balo_3rd: false })
            }
        }, 500);
    }
    Show_OfficeSoftware_Dropdown_3rd(event) {
        event.preventDefault();
        this.setState({
            Office_software_3rd: true,
            level_2: true,
            level_3: true,

            Mouse_3rd: false,
            Keyboard_3rd: false,
            Mouse_pads_3rd: false,
            Headphone_3rd: false,
            Remote_control_3rd: false,
            Playstation_3rd: false,
            Stream_3rd: false,

            Camera_conference_3rd: false,

            Computer_nuc_3rd: false,
            Computer_aps_3rd: false,
            Computer_msi_3rd: false,
            Computer_accer_3rd: false,
            Computer_assus_3rd: false,
            Computer_dell_3rd: false,

            Main_3rd: false,
            VGA_3rd: false,
            Ram_3rd: false,
            HDD_3rd: false,
            PSU_3rd: false,
            Case_3rd: false,
            Heatsink_3rd: false,
            Fan_3rd: false,
            SSD_3rd: false,
            Custom_3rd: false,

            Chair_gaming_3rd: false,
            Table_gaming_3rd: false,
            Accessories_gaming_3rd: false,

            Audio_Headphone_3rd: false,
            Speaker_3rd: false,
            Sound_card_3rd: false,
            Audio_bigsale_3rd: false,

            Office_mouse_3rd: false,
            Office_keyboard_3rd: false,
            Office_headphone_3rd: false,
            Office_webcam_3rd: false,
            Office_usb_3rd: false,
            Office_harddrive_3rd: false,
            Office_represent_3rd: false,
            Office_balo_3rd: false,

            Another_smartwatch_3rd: false,
            Another_camerajourney_3rd: false
        })
    }
    Hide_OfficeSoftware_Dropdown_3rd(event) {
        event.preventDefault();

        this.setState({ level_3: false });

        setTimeout(() => {
            if (this.state.level_3 === false) {
                this.setState({ Office_software_3rd: false })
            }
        }, 500);
    }
    Show_AnotherSmartwatch_Dropdown_3rd(event) {
        event.preventDefault();
        this.setState({
            Another_smartwatch_3rd: true,
            level_2: true,
            level_3: true,

            Mouse_3rd: false,
            Keyboard_3rd: false,
            Mouse_pads_3rd: false,
            Headphone_3rd: false,
            Remote_control_3rd: false,
            Playstation_3rd: false,
            Stream_3rd: false,

            Camera_conference_3rd: false,

            Computer_nuc_3rd: false,
            Computer_aps_3rd: false,
            Computer_msi_3rd: false,
            Computer_accer_3rd: false,
            Computer_assus_3rd: false,
            Computer_dell_3rd: false,

            Main_3rd: false,
            VGA_3rd: false,
            Ram_3rd: false,
            HDD_3rd: false,
            PSU_3rd: false,
            Case_3rd: false,
            Heatsink_3rd: false,
            Fan_3rd: false,
            SSD_3rd: false,
            Custom_3rd: false,

            Chair_gaming_3rd: false,
            Table_gaming_3rd: false,
            Accessories_gaming_3rd: false,

            Audio_Headphone_3rd: false,
            Speaker_3rd: false,
            Sound_card_3rd: false,
            Audio_bigsale_3rd: false,

            Office_mouse_3rd: false,
            Office_keyboard_3rd: false,
            Office_headphone_3rd: false,
            Office_webcam_3rd: false,
            Office_usb_3rd: false,
            Office_harddrive_3rd: false,
            Office_represent_3rd: false,
            Office_balo_3rd: false,
            Office_software_3rd: false,

            Another_camerajourney_3rd: false
        })
    }
    Hide_AnotherSmartwatch_Dropdown_3rd(event) {
        event.preventDefault();

        this.setState({ level_3: false });

        setTimeout(() => {
            if (this.state.level_3 === false) {
                this.setState({ Another_smartwatch_3rd: false })
            }
        }, 500);
    }
    Show_AnotherCameraJourney_Dropdown_3rd(event) {
        event.preventDefault();
        this.setState({
            Another_camerajourney_3rd: true,
            level_2: true,
            level_3: true,

            Mouse_3rd: false,
            Keyboard_3rd: false,
            Mouse_pads_3rd: false,
            Headphone_3rd: false,
            Remote_control_3rd: false,
            Playstation_3rd: false,
            Stream_3rd: false,

            Camera_conference_3rd: false,

            Computer_nuc_3rd: false,
            Computer_aps_3rd: false,
            Computer_msi_3rd: false,
            Computer_accer_3rd: false,
            Computer_assus_3rd: false,
            Computer_dell_3rd: false,

            Main_3rd: false,
            VGA_3rd: false,
            Ram_3rd: false,
            HDD_3rd: false,
            PSU_3rd: false,
            Case_3rd: false,
            Heatsink_3rd: false,
            Fan_3rd: false,
            SSD_3rd: false,
            Custom_3rd: false,

            Chair_gaming_3rd: false,
            Table_gaming_3rd: false,
            Accessories_gaming_3rd: false,

            Audio_Headphone_3rd: false,
            Speaker_3rd: false,
            Sound_card_3rd: false,
            Audio_bigsale_3rd: false,

            Office_mouse_3rd: false,
            Office_keyboard_3rd: false,
            Office_headphone_3rd: false,
            Office_webcam_3rd: false,
            Office_usb_3rd: false,
            Office_harddrive_3rd: false,
            Office_represent_3rd: false,
            Office_balo_3rd: false,
            Office_software_3rd: false,

            Another_smartwatch_3rd: false,
        })
    }
    Hide_AnotherCameraJourney_Dropdown_3rd(event) {
        event.preventDefault();

        this.setState({ level_3: false });

        setTimeout(() => {
            if (this.state.level_3 === false) {
                this.setState({ Another_camerajourney_3rd: false })
            }
        }, 500);
    }
    //-----------------render------------------------------------
    render() {
        var eventss = 0;
        return (
            <div id="dropdown" onMouseLeave={this.HideDropdown}>
                <button id="dropdown-btn" onMouseOver={this.ShowDropdown}>
                    <img src="https://freeiconshop.com/wp-content/uploads/edd/list-round-solid.png" />
                    <p>DANH MỤC SẢN PHẨM</p>
                </button>
                {
                    this.state.isShowDropdown
                        ? (
                            <div id="dropdown-content">
                                <div id="dropdown-content-1st-box">
                                    <a className="dropdown-content-item" id="item-1" href="#" onMouseOver={this.Show_GG_Dropdown_2nd} onMouseLeave={this.Hide_GG_Dropdown_2nd}>
                                        <div className="dropdown-content-item-left">
                                            <img src="https://theme.hstatic.net/1000129940/1000623473/14/icon_nav_1.png?v=94" />
                                            <span>Gaming Gear</span>
                                        </div>
                                        <span className="fa fa-angle-right"></span>
                                    </a>

                                    <a className="dropdown-content-item" href="#" onMouseOver={this.Show_Conference_Dropdown_2nd} onMouseLeave={this.Hide_Conference_Dropdown_2nd}>
                                        <div className="dropdown-content-item-left">
                                            <img src="https://theme.hstatic.net/1000129940/1000623473/14/icon_nav_2.png?v=94" />
                                            <span>Giải Pháp Họp Trực Tuyến</span>
                                        </div>
                                        <span className="fa fa-angle-right"></span>
                                    </a>

                                    <a className="dropdown-content-item" href="#" onMouseOver={this.Show_PC_Dropdown_2nd} onMouseLeave={this.Hide_PC_Dropdown_2nd}>
                                        <div className="dropdown-content-item-left">
                                            <img src="https://theme.hstatic.net/1000129940/1000623473/14/icon_nav_3.png?v=94" />
                                            <span>Máy Tính Bộ</span>
                                        </div>
                                        <span className="fa fa-angle-right"></span>
                                    </a>

                                    <a className="dropdown-content-item" href="#" onMouseOver={this.Show_Screen_Dropdown_2nd} onMouseLeave={this.Hide_Screen_Dropdown_2nd} >
                                        <div className="dropdown-content-item-left">
                                            <img src="https://theme.hstatic.net/1000129940/1000623473/14/icon_nav_4.png?v=94" />
                                            <span>Màn Hình Máy Tính</span>
                                        </div>
                                        <span className="fa fa-angle-right"></span>
                                    </a>

                                    <a className="dropdown-content-item" href="#" onMouseOver={this.Show_CComponents_Dropdown_2nd} onMouseLeave={this.Hide_CComponents_Dropdown_2nd} >
                                        <div className="dropdown-content-item-left">
                                            <img src="https://theme.hstatic.net/1000129940/1000623473/14/icon_nav_5.png?v=94" />
                                            <span>Linh Kiện Máy Tính</span>
                                        </div>
                                        <span className="fa fa-angle-right"></span>
                                    </a>

                                    <a className="dropdown-content-item" href="#" onMouseOver={this.Show_LaptopGaming_Dropdown_2nd} onMouseLeave={this.Hide_LaptopGaming_Dropdown_2nd} >
                                        <div className="dropdown-content-item-left">
                                            <img src="https://theme.hstatic.net/1000129940/1000623473/14/icon_nav_6.png?v=94" />
                                            <span>Laptop Gaming</span>
                                        </div>
                                        <span className="fa fa-angle-right"></span>
                                    </a>

                                    <a className="dropdown-content-item" href="#" onMouseOver={this.Show_ChairGaming_Dropdown_2nd} onMouseLeave={this.Hide_ChairGaming_Dropdown_2nd} >
                                        <div className="dropdown-content-item-left">
                                            <img src="https://theme.hstatic.net/1000129940/1000623473/14/icon_nav_7.png?v=94" />
                                            <span>Bàn Ghế Chơi Game</span>
                                        </div>
                                        <span className="fa fa-angle-right"></span>
                                    </a>

                                    <a className="dropdown-content-item" href="#" onMouseOver={this.Show_Audio_Dropdown_2nd} onMouseLeave={this.Hide_Audio_Dropdown_2nd} >
                                        <div className="dropdown-content-item-left">
                                            <img src="https://theme.hstatic.net/1000129940/1000623473/14/icon_nav_8.png?v=94" />
                                            <span>Audio-Thiết Bị Âm Thanh</span>
                                        </div>
                                        <span className="fa fa-angle-right"></span>
                                    </a>

                                    <a className="dropdown-content-item" href="#" onMouseOver={this.Show_Office_Dropdown_2nd} onMouseLeave={this.Hide_Office_Dropdown_2nd} >
                                        <div className="dropdown-content-item-left">
                                            <img src="https://theme.hstatic.net/1000129940/1000623473/14/icon_nav_9.png?v=94" />
                                            <span>Thiết Bị Văn Phòng</span>
                                        </div>
                                        <span className="fa fa-angle-right"></span>
                                    </a>

                                    <a className="dropdown-content-item" href="#" onMouseOver={this.Show_Network_Dropdown_2nd} onMouseLeave={this.Hide_Network_Dropdown_2nd} >
                                        <div className="dropdown-content-item-left">
                                            <img src="https://theme.hstatic.net/1000129940/1000623473/14/icon_nav_10.png?v=94" />
                                            <span>Thiết Bị Mạng</span>
                                        </div>
                                        <span className="fa fa-angle-right"></span>
                                    </a>

                                    <a className="dropdown-content-item" href="#" onMouseOver={this.Show_Another_Dropdown_2nd} onMouseLeave={this.Hide_Another_Dropdown_2nd} >
                                        <div className="dropdown-content-item-left">
                                            <img src="https://theme.hstatic.net/1000129940/1000623473/14/icon_nav_11.png?v=94" />
                                            <span>Đồ Chơi Công Nghệ Khác</span>
                                        </div>
                                        <span className="fa fa-angle-right"></span>
                                    </a>
                                </div>
                                <div id="dropdown-content-2nd-box">
                                    {this.state.GGear_2nd ?
                                        (
                                            <div id="dropdown-content-2nd_GG" onMouseOver={this.Show_GG_Dropdown_2nd} onMouseLeave={this.Hide_GG_Dropdown_2nd}>

                                                <a className="dropdown-content-item-2nd" href="#" onMouseOver={this.Show_Mouse_Dropdown_3rd}
                                                    onMouseLeave={this.Hide_Mouse_Dropdown_3rd}>
                                                    <span>Chuột Chơi Game</span>
                                                    <span className="fa fa-angle-right"></span>
                                                </a>
                                                <a className="dropdown-content-item-2nd" href="#" onMouseOver={this.Show_Keyboard_Dropdown_3rd}
                                                    onMouseLeave={this.Hide_Keyboard_Dropdown_3rd}>
                                                    <span>Bàn Phím</span>
                                                    <span className="fa fa-angle-right"></span>
                                                </a>

                                                <a className="dropdown-content-item-2nd" href="#" onMouseOver={this.Show_Mousepads_Dropdown_3rd}
                                                    onMouseLeave={this.Hide_Mousepads_Dropdown_3rd}>
                                                    <span>Bàn Di Chuột</span>
                                                    <span className="fa fa-angle-right"></span>
                                                </a>
                                                <a className="dropdown-content-item-2nd" href="#" onMouseOver={this.Show_Headphone_Dropdown_3rd}
                                                    onMouseLeave={this.Hide_Headphone_Dropdown_3rd}>
                                                    <span>Tai Nghe</span>
                                                    <span className="fa fa-angle-right"></span>
                                                </a>
                                                <a className="dropdown-content-item-2nd" href="#" onMouseOver={this.Show_Remotecontrol_Dropdown_3rd}
                                                    onMouseLeave={this.Hide_Remotecontrol_Dropdown_3rd}>
                                                    <span>Bộ Điều Khiển</span>
                                                    <span className="fa fa-angle-right"></span>
                                                </a>
                                                <a className="dropdown-content-item-2nd" href="#" onMouseOver={this.Show_Playstation_Dropdown_3rd}
                                                    onMouseLeave={this.Hide_Playstation_Dropdown_3rd}>
                                                    <span>Máy Playstation</span>
                                                    <span className="fa fa-angle-right"></span>
                                                </a>
                                                <a className="dropdown-content-item-2nd" href="#" onMouseOver={this.Show_Stream_Dropdown_3rd}
                                                    onMouseLeave={this.Hide_Stream_Dropdown_3rd}>
                                                    <span>Thiết Bị Stream</span>
                                                    <span className="fa fa-angle-right"></span>
                                                </a>
                                                <a className="dropdown-content-item-2nd" href="#" onMouseOver={this.Show_Accessories_Dropdown_3rd}
                                                    onMouseLeave={this.Hide_Accessories_Dropdown_3rd}>
                                                    <span>Phụ Kiện</span>
                                                    <span className="fa fa-angle-right"></span>
                                                </a>
                                            </div>
                                        )
                                        : (null)
                                    }
                                    {
                                        this.state.Conference_2nd ?
                                            (
                                                <div id="dropdown-content-2nd_CC" onMouseOver={this.Show_Conference_Dropdown_2nd} onMouseLeave={this.Hide_Conference_Dropdown_2nd}>

                                                    <a className="dropdown-content-item-2nd" href="#" onMouseOver={this.Show_CConference_Dropdown_3rd}
                                                        onMouseLeave={this.Hide_CConference_Dropdown_3rd}>
                                                        <span>Camera Hội Nghị</span>
                                                        <span className="fa fa-angle-right"></span>
                                                    </a>

                                                    <a className="dropdown-content-item-2nd" href="#" onMouseOver={this.Show_Nuccomputer_Dropdown_3rd}
                                                        onMouseLeave={this.Hide_Nuccomputer_Dropdown_3rd}>
                                                        <span>Máy Tính Nuc</span>
                                                        <span className="fa fa-angle-right"></span>
                                                    </a>

                                                    <a className="dropdown-content-item-2nd" href="https://apshop.vn/collections/giai-phap-hop-truc-tuyen-khong-day-barco">
                                                        <span>Họp Trực Tuyến Không Dây</span>
                                                    </a>

                                                </div>

                                            ) : (null)
                                    }
                                    {
                                        this.state.PC_2nd ?
                                            (
                                                <div id="dropdown-content-2nd_PC" onMouseOver={this.Show_PC_Dropdown_2nd} onMouseLeave={this.Hide_PC_Dropdown_2nd}>

                                                    <a className="dropdown-content-item-2nd" href="#" onMouseOver={this.Show_Computeraps_Dropdown_3rd}
                                                        onMouseLeave={this.Hide_Nuccomputer_Dropdown_3rd}>
                                                        <span>Máy Tính APS</span>
                                                        <span className="fa fa-angle-right"></span>
                                                    </a>

                                                    <a className="dropdown-content-item-2nd" href="#" onMouseOver={this.Show_Computermsi_Dropdown_3rd}
                                                        onMouseLeave={this.Hide_Computermsi_Dropdown_3rd}>
                                                        <span>Máy Tính MSI</span>
                                                        <span className="fa fa-angle-right"></span>
                                                    </a>

                                                    <a className="dropdown-content-item-2nd" href="#" onMouseOver={this.Show_Computerintel_Dropdown_3rd}
                                                        onMouseLeave={this.Hide_Computerintel_Dropdown_3rd}>
                                                        <span>Máy Tính INTEL</span>
                                                        <span className="fa fa-angle-right"></span>
                                                    </a>
                                                    <a className="dropdown-content-item-2nd" href="#">
                                                        <span>Máy Tính ACCER</span>
                                                    </a>
                                                    <a className="dropdown-content-item-2nd" href="#">
                                                        <span>Máy Tính ASSUS</span>
                                                    </a>
                                                    <a className="dropdown-content-item-2nd" href="#" onMouseOver={this.Show_Computerdell_Dropdown_3rd}
                                                        onMouseLeave={this.Hide_Computerdell_Dropdown_3rd}>
                                                        <span>Máy Tính DELL</span>
                                                        <span className="fa fa-angle-right"></span>
                                                    </a>

                                                </div>

                                            ) : (null)
                                    }
                                    {
                                        this.state.Screen_2nd ?
                                            (
                                                <div id="dropdown-content-2nd_PC" onMouseOver={this.Show_Screen_Dropdown_2nd} onMouseLeave={this.Hide_Screen_Dropdown_2nd}>

                                                    <a className="dropdown-content-item-2nd" href="https://apshop.vn/collections/man-hinh-lg">
                                                        <span>LG</span>
                                                    </a>

                                                    <a className="dropdown-content-item-2nd" href="https://apshop.vn/collections/man-hinh-samsung">
                                                        <span>Samsung</span>
                                                    </a>

                                                    <a className="dropdown-content-item-2nd" href="https://apshop.vn/collections/man-hinh-dell">
                                                        <span>Dell</span>
                                                    </a>
                                                    <a className="dropdown-content-item-2nd" href="https://apshop.vn/collections/man-hinh-accer">
                                                        <span>Accer</span>
                                                    </a>
                                                    <a className="dropdown-content-item-2nd" href="https://apshop.vn/collections/man-hinh-assus">
                                                        <span>Assus</span>
                                                    </a>
                                                    <a className="dropdown-content-item-2nd" href="https://apshop.vn/collections/man-hinh-hp">
                                                        <span>HP</span>
                                                    </a>
                                                    <a className="dropdown-content-item-2nd" href="https://apshop.vn/collections/man-hinh-benq">
                                                        <span>Benq</span>
                                                    </a>
                                                    <a className="dropdown-content-item-2nd" href="https://apshop.vn/collections/man-hinh-msi">
                                                        <span>Msi</span>
                                                    </a>
                                                    <a className="dropdown-content-item-2nd" href="https://apshop.vn/collections/man-hinh-viewsonic">
                                                        <span>Viewsonic</span>
                                                    </a>
                                                    <a className="dropdown-content-item-2nd" href="https://apshop.vn/collections/man-hinh-aoc-1">
                                                        <span>AOC</span>
                                                    </a>
                                                    <a className="dropdown-content-item-2nd" href="https://apshop.vn/collections/man-hinh-cooler-master">
                                                        <span>Cooler Master</span>
                                                    </a>

                                                </div>

                                            ) : (null)
                                    }
                                    {
                                        this.state.CComponents_2nd ?
                                            (
                                                <div id="dropdown-content-2nd_PC" onMouseOver={this.Show_CComponents_Dropdown_2nd} onMouseLeave={this.Hide_CComponents_Dropdown_2nd}>

                                                    <a className="dropdown-content-item-2nd" href="#" onMouseOver={this.Show_CPU_Dropdown_3rd}
                                                        onMouseLeave={this.Hide_CPU_Dropdown_3rd}>
                                                        <span>CPU - BỘ XỬ LÝ</span>
                                                        <span className="fa fa-angle-right"></span>
                                                    </a>

                                                    <a className="dropdown-content-item-2nd" href="#" onMouseOver={this.Show_Main_Dropdown_3rd}
                                                        onMouseLeave={this.Hide_Main_Dropdown_3rd}>
                                                        <span>MAIN - BO MẠCH CHỦ</span>
                                                        <span className="fa fa-angle-right"></span>
                                                    </a>

                                                    <a className="dropdown-content-item-2nd" href="#" onMouseOver={this.Show_VGA_Dropdown_3rd}
                                                        onMouseLeave={this.Hide_VGA_Dropdown_3rd}>
                                                        <span>VGA - CARD MÀN HÌNH</span>
                                                        <span className="fa fa-angle-right"></span>
                                                    </a>
                                                    <a className="dropdown-content-item-2nd" href="#" onMouseOver={this.Show_RAM_Dropdown_3rd}
                                                        onMouseLeave={this.Hide_RAM_Dropdown_3rd}>
                                                        <span>RAM - BỘ NHỚ TRONG</span>
                                                        <span className="fa fa-angle-right"></span>
                                                    </a>
                                                    <a className="dropdown-content-item-2nd" href="#" onMouseOver={this.Show_SSD_Dropdown_3rd}
                                                        onMouseLeave={this.Hide_SSD_Dropdown_3rd}>
                                                        <span>SSD - Ổ CỨNG THỂ RẮN</span>
                                                        <span className="fa fa-angle-right"></span>
                                                    </a>
                                                    <a className="dropdown-content-item-2nd" href="#" onMouseOver={this.Show_HDD_Dropdown_3rd}
                                                        onMouseLeave={this.Hide_HDD_Dropdown_3rd}>
                                                        <span>HDD - Ổ CỨNG CƠ</span>
                                                        <span className="fa fa-angle-right"></span>
                                                    </a>
                                                    <a className="dropdown-content-item-2nd" href="#" onMouseOver={this.Show_PSU_Dropdown_3rd}
                                                        onMouseLeave={this.Hide_PSU_Dropdown_3rd}>
                                                        <span>PSU - NGUỒN</span>
                                                        <span className="fa fa-angle-right"></span>
                                                    </a>
                                                    <a className="dropdown-content-item-2nd" href="#" onMouseOver={this.Show_CASE_Dropdown_3rd}
                                                        onMouseLeave={this.Hide_CASE_Dropdown_3rd}>
                                                        <span>CASE - THÙNG MÁY</span>
                                                        <span className="fa fa-angle-right"></span>
                                                    </a>
                                                    <a className="dropdown-content-item-2nd" href="#" onMouseOver={this.Show_Heatsink_Dropdown_3rd}
                                                        onMouseLeave={this.Hide_Heatsink_Dropdown_3rd}>
                                                        <span>TẢN NHIỆT CPU</span>
                                                        <span className="fa fa-angle-right"></span>
                                                    </a>
                                                    <a className="dropdown-content-item-2nd" href="#" onMouseOver={this.Show_Fan_Dropdown_3rd}
                                                        onMouseLeave={this.Hide_Fan_Dropdown_3rd}>
                                                        <span>QUẠT TẢN NHIỆT</span>
                                                        <span className="fa fa-angle-right"></span>
                                                    </a>
                                                    <a className="dropdown-content-item-2nd" href="#" onMouseOver={this.Show_Fancustom_Dropdown_3rd}
                                                        onMouseLeave={this.Hide_Fancustom_Dropdown_3rd}>
                                                        <span>TẢN NHIỆT CUSTOM</span>
                                                        <span className="fa fa-angle-right"></span>
                                                    </a>


                                                </div>

                                            ) : (null)
                                    }
                                    {
                                        this.state.LaptopGaming_2nd ?
                                            (
                                                <div id="dropdown-content-2nd_PC" onMouseOver={this.Show_LaptopGaming_Dropdown_2nd} onMouseLeave={this.Hide_LaptopGaming_Dropdown_2nd}>

                                                    <a className="dropdown-content-item-2nd" href="https://apshop.vn/collections/laptop-gaming-acer">
                                                        <span>LAPTOP GAMMING ACCER</span>
                                                    </a>
                                                    <a className="dropdown-content-item-2nd" href="https://apshop.vn/collections/laptop-doanh-nhan">
                                                        <span>LAPTOP LG Gram</span>
                                                    </a>
                                                    <a className="dropdown-content-item-2nd" href="https://apshop.vn/collections/laptop-asus">
                                                        <span>LAPTOP GAMING Asus</span>
                                                    </a>
                                                    <a className="dropdown-content-item-2nd" href="https://apshop.vn/collections/laptop-msi">
                                                        <span>LAPTOP MSI</span>
                                                    </a>
                                                    <a className="dropdown-content-item-2nd" href="https://apshop.vn/collections/laptop-intel-vgs-imperium">
                                                        <span>LAPTOP VGS</span>
                                                    </a>
                                                    <a className="dropdown-content-item-2nd" href="https://apshop.vn/collections/laptop-lenovo">
                                                        <span>LAPTOP Lenovo</span>
                                                    </a>
                                                    <a className="dropdown-content-item-2nd" href="https://apshop.vn/collections/laptop-hp-gaming">
                                                        <span>LAPTOP HP</span>
                                                    </a>
                                                    <a className="dropdown-content-item-2nd" href="https://apshop.vn/collections/laptop-dell">
                                                        <span>LAPTOP Dell</span>
                                                    </a>
                                                    <a className="dropdown-content-item-2nd" href="https://apshop.vn/collections/de-tan-nhiet-laptop">
                                                        <span>Đế Tản Nhiệt Laptop</span>
                                                    </a>

                                                </div>

                                            ) : (null)
                                    }
                                    {
                                        this.state.ChairGaming_2nd ?
                                            (
                                                <div id="dropdown-content-2nd_PC" onMouseOver={this.Show_ChairGaming_Dropdown_2nd} onMouseLeave={this.Hide_ChairGaming_Dropdown_2nd}>
                                                    <a className="dropdown-content-item-2nd" href="#" onMouseOver={this.Show_ChairGaming_Dropdown_3rd}
                                                        onMouseLeave={this.Hide_ChairGaming_Dropdown_3rd}>
                                                        <span>GHẾ CHƠI GAME</span>
                                                        <span className="fa fa-angle-right"></span>
                                                    </a>

                                                    <a className="dropdown-content-item-2nd" href="#" onMouseOver={this.Show_TableGaming_Dropdown_3rd}
                                                        onMouseLeave={this.Hide_TableGaming_Dropdown_3rd}>
                                                        <span>BÀN CHƠI GAME</span>
                                                        <span className="fa fa-angle-right"></span>
                                                    </a>

                                                    <a className="dropdown-content-item-2nd" href="#" onMouseOver={this.Show_AccessoriesGaming_Dropdown_3rd}
                                                        onMouseLeave={this.Hide_AccessoriesGaming_Dropdown_3rd}>
                                                        <span>PHỤ KIỆN</span>
                                                        <span className="fa fa-angle-right"></span>
                                                    </a>
                                                </div>

                                            ) : (null)
                                    }
                                    {
                                        this.state.Audio_2nd ?
                                            (
                                                <div id="dropdown-content-2nd_PC" onMouseOver={this.Show_Audio_Dropdown_2nd} onMouseLeave={this.Hide_Audio_Dropdown_2nd}>
                                                    <a className="dropdown-content-item-2nd" href="#" onMouseOver={this.Show_Audio_Headphone_Dropdown_3rd}
                                                        onMouseLeave={this.Hide_Audio_Headphone_Dropdown_3rd}>
                                                        <span>TAI NGHE</span>
                                                        <span className="fa fa-angle-right"></span>
                                                    </a>

                                                    <a className="dropdown-content-item-2nd" href="#" onMouseOver={this.Show_Speaker_Dropdown_3rd}
                                                        onMouseLeave={this.Hide_Speaker_Dropdown_3rd}>
                                                        <span>LOA NGHE NHẠC</span>
                                                        <span className="fa fa-angle-right"></span>
                                                    </a>

                                                    <a className="dropdown-content-item-2nd" href="https://apshop.vn/collections/san-pham-audio-big-sale">
                                                        <span>CÁC SẢN PHẨM BIGSALE</span>
                                                    </a>
                                                </div>

                                            ) : (null)
                                    }
                                    {
                                        this.state.Office_2nd ?
                                            (
                                                <div id="dropdown-content-2nd_PC" onMouseOver={this.Show_Office_Dropdown_2nd} onMouseLeave={this.Hide_Office_Dropdown_2nd}>
                                                    <a className="dropdown-content-item-2nd" href="#" onMouseOver={this.Show_OfficeMouse_Dropdown_3rd}
                                                        onMouseLeave={this.Hide_OfficeMouse_Dropdown_3rd}>
                                                        <span>CHUỘT</span>
                                                        <span className="fa fa-angle-right"></span>
                                                    </a>

                                                    <a className="dropdown-content-item-2nd" href="#" onMouseOver={this.Show_OfficeKeyboard_Dropdown_3rd}
                                                        onMouseLeave={this.Hide_OfficeKeyboard_Dropdown_3rd}>
                                                        <span>BÀN PHÍM</span>
                                                        <span className="fa fa-angle-right"></span>
                                                    </a>

                                                    <a className="dropdown-content-item-2nd" onMouseOver={this.Show_OfficeHeadphone_Dropdown_3rd}
                                                        onMouseLeave={this.Hide_OfficeHeadphone_Dropdown_3rd}>
                                                        <span>TAI NGHE</span>
                                                        <span className="fa fa-angle-right"></span>
                                                    </a>
                                                    <a className="dropdown-content-item-2nd" href="#" onMouseOver={this.Show_OfficeWebcam_Dropdown_3rd}
                                                        onMouseLeave={this.Hide_OfficeWebcam_Dropdown_3rd}>
                                                        <span>WEBCAM</span>
                                                        <span className="fa fa-angle-right"></span>
                                                    </a>

                                                    <a className="dropdown-content-item-2nd" href="#" onMouseOver={this.Show_OfficeUsb_Dropdown_3rd}
                                                        onMouseLeave={this.Hide_OfficeUsb_Dropdown_3rd}>
                                                        <span>USB</span>
                                                        <span className="fa fa-angle-right"></span>
                                                    </a>

                                                    <a className="dropdown-content-item-2nd" onMouseOver={this.Show_OfficeHarddrive_Dropdown_3rd}
                                                        onMouseLeave={this.Hide_OfficeHarddrive_Dropdown_3rd}>
                                                        <span>Ổ CỨNG DI ĐỘNG</span>
                                                        <span className="fa fa-angle-right"></span>
                                                    </a>
                                                    <a className="dropdown-content-item-2nd" href="https://apshop.vn/collections/thiet-bi-trinh-chieu">
                                                        <span>THIẾT BỊ TRÌNH CHIẾU</span>
                                                    </a>

                                                    <a className="dropdown-content-item-2nd" href="#" onMouseOver={this.Show_OfficeBalo_Dropdown_3rd}
                                                        onMouseLeave={this.Hide_OfficeBalo_Dropdown_3rd}>
                                                        <span>BALO CÁC LOẠI</span>
                                                        <span className="fa fa-angle-right"></span>
                                                    </a>

                                                    <a className="dropdown-content-item-2nd" href="#" onMouseOver={this.Show_OfficeSoftware_Dropdown_3rd}
                                                        onMouseLeave={this.Hide_OfficeSoftware_Dropdown_3rd}>
                                                        <span>PHẦN MỀM BẢN QUYỀN</span>
                                                        <span className="fa fa-angle-right"></span>
                                                    </a>
                                                </div>

                                            ) : (null)
                                    }
                                    {
                                        this.state.Network_2nd ?
                                            (
                                                <div id="dropdown-content-2nd_PC" onMouseOver={this.Show_Network_Dropdown_2nd} onMouseLeave={this.Hide_Network_Dropdown_2nd}>

                                                    <a className="dropdown-content-item-2nd" href="https://apshop.vn/collections/thiet-bi-mang-asus">
                                                        <span>ASUS</span>
                                                    </a>

                                                    <a className="dropdown-content-item-2nd" href="https://apshop.vn/collections/thiet-bi-mang-linksys">
                                                        <span>LINKSYS</span>
                                                    </a>

                                                </div>

                                            ) : (null)
                                    }
                                    {
                                        this.state.Another_2nd ?
                                            (
                                                <div id="dropdown-content-2nd_PC" onMouseOver={this.Show_Another_Dropdown_2nd} onMouseLeave={this.Hide_Another_Dropdown_2nd}>
                                                    <a className="dropdown-content-item-2nd" href="#" onMouseOver={this.Show_AnotherSmartwatch_Dropdown_3rd}
                                                        onMouseLeave={this.Hide_AnotherSmartwatch_Dropdown_3rd}>
                                                        <span>ĐỒNG HỒ THÔNG MINH</span>
                                                        <span className="fa fa-angle-right"></span>
                                                    </a>

                                                    <a className="dropdown-content-item-2nd" href="#" onMouseOver={this.Show_AnotherCameraJourney_Dropdown_3rd}
                                                        onMouseLeave={this.Hide_AnotherCameraJourney_Dropdown_3rd}>
                                                        <span>CAMERA HÀNH TRÌNH</span>
                                                        <span className="fa fa-angle-right"></span>
                                                    </a>
                                                </div>

                                            ) : (null)
                                    }
                                </div>
                                <div id="dropdown-content-3rd-box">

                                    {
                                        this.state.Mouse_3rd ?
                                            (
                                                <div id="dropdown-content-3rd-mouse" className="dropdown-content-3rd" onMouseOver={this.Show_Mouse_Dropdown_3rd} onMouseLeave={this.Hide_Mouse_Dropdown_3rd}>
                                                    <a className="dropdown-content-item-3rd" href="https://apshop.vn/collections/chuot-razer">Razer</a>
                                                    <a className="dropdown-content-item-3rd" href="https://apshop.vn/collections/chuot-logitech-gaming">Logitech</a>
                                                    <a className="dropdown-content-item-3rd" href="https://apshop.vn/collections/chuot-corsair">Corsair</a>
                                                    <a className="dropdown-content-item-3rd" href="https://apshop.vn/collections/chuot-zowie">Zowie</a>
                                                    <a className="dropdown-content-item-3rd" href="https://apshop.vn/collections/chuot-madcatz">Madcatz</a>
                                                    <a className="dropdown-content-item-3rd" href="https://apshop.vn/collections/chuot-steelseries">Steelseries</a>
                                                    <a className="dropdown-content-item-3rd" href="https://apshop.vn/collections/chuot-hyperx">HyperX</a>
                                                    <a className="dropdown-content-item-3rd" href="https://apshop.vn/collections/chuot-asus>">Asus</a>
                                                </div>
                                            ) : (null)}
                                    {
                                        this.state.Keyboard_3rd ?
                                            (
                                                <div id="dropdown-content-3rd-keyboard" className="dropdown-content-3rd" onMouseOver={this.Show_Keyboard_Dropdown_3rd} onMouseLeave={this.Hide_Keyboard_Dropdown_3rd}>
                                                    <a className="dropdown-content-item-3rd" href="https://apshop.vn/collections/ban-phim-razer">Razer</a>
                                                    <a className="dropdown-content-item-3rd" href="https://apshop.vn/collections/ban-phim-logitech-gaming">Logitech</a>
                                                    <a className="dropdown-content-item-3rd" href="https://apshop.vn/collections/ban-phim-corsair">Corsair</a>
                                                    <a className="dropdown-content-item-3rd" href="https://apshop.vn/collections/ban-phim-leopold">Leopold</a>
                                                    <a className="dropdown-content-item-3rd" href="https://apshop.vn/collections/ban-phim-ducky">Ducky</a>
                                                    <a className="dropdown-content-item-3rd" href="https://apshop.vn/collections/ban-phim-ikbc">Ikbc</a>
                                                    <a className="dropdown-content-item-3rd" href="https://apshop.vn/collections/ban-phim-steelseries">Steelseries</a>
                                                    <a className="dropdown-content-item-3rd" href="https://apshop.vn/collections/ban-phim-hyperx">HyperX</a>
                                                </div>
                                            ) : (null)
                                    }
                                    {
                                        this.state.Mouse_pads_3rd ?
                                            (
                                                <div id="dropdown-content-3rd-mousepads" className="dropdown-content-3rd" onMouseOver={this.Show_Mousepads_Dropdown_3rd} onMouseLeave={this.Hide_Mousepads_Dropdown_3rd}>
                                                    <a className="dropdown-content-item-3rd" href="https://apshop.vn/collections/ban-di-chuot-razer">Razer</a>
                                                    <a className="dropdown-content-item-3rd" href="https://apshop.vn/collections/ban-di-chuot-logitech">Logitech</a>
                                                    <a className="dropdown-content-item-3rd" href="https://apshop.vn/collections/ban-di-chuot-steelseries">Steelseries</a>
                                                    <a className="dropdown-content-item-3rd" href="https://apshop.vn/collections/ban-di-chuot-corsair">Corsair</a>
                                                    <a className="dropdown-content-item-3rd" href="https://apshop.vn/collections/ban-di-chuot-zowie">Zowie</a>
                                                    <a className="dropdown-content-item-3rd" href="https://apshop.vn/collections/ban-di-chuot-tt-esports">TT Esports</a>
                                                </div>
                                            ) : (null)
                                    }
                                    {
                                        this.state.Headphone_3rd ?
                                            (
                                                <div id="dropdown-content-3rd-headphone" className="dropdown-content-3rd" onMouseOver={this.Show_Headphone_Dropdown_3rd} onMouseLeave={this.Hide_Headphone_Dropdown_3rd}>
                                                    <a className="dropdown-content-item-3rd" href="https://apshop.vn/collections/tai-nghe-razer">Razer</a>
                                                    <a className="dropdown-content-item-3rd" href="https://apshop.vn/collections/tai-nghe-logitech-gaming">Logitech</a>
                                                    <a className="dropdown-content-item-3rd" href="https://apshop.vn/collections/tai-nghe-steelseries">Steelseries</a>
                                                    <a className="dropdown-content-item-3rd" href="https://apshop.vn/collections/tai-nghe-corsair">Corsair</a>
                                                    <a className="dropdown-content-item-3rd" href="https://apshop.vn/collections/tai-nghe-hyperx">HyperX</a>
                                                    <a className="dropdown-content-item-3rd" href="https://apshop.vn/collections/tai-nghe-asus-rog">Asus</a>
                                                    <a className="dropdown-content-item-3rd" href="https://apshop.vn/collections/tai-nghe-sades">Sades</a>
                                                    <a className="dropdown-content-item-3rd" href="https://apshop.vn/collections/tai-nghe-plantronics-rig">Plantronics Rig</a>
                                                </div>
                                            ) : (null)
                                    }
                                    {
                                        this.state.Remote_control_3rd ?
                                            (
                                                <div id="dropdown-content-3rd-remote" className="dropdown-content-3rd" onMouseOver={this.Show_Remotecontrol_Dropdown_3rd} onMouseLeave={this.Hide_Remotecontrol_Dropdown_3rd}>
                                                    <a className="dropdown-content-item-3rd" href="https://apshop.vn/collections/vo-lang">Vô Lăng</a>
                                                    <a className="dropdown-content-item-3rd" href="https://apshop.vn/collections/tay-cam-choi-game">Tay Cầm</a>
                                                </div>
                                            ) : (null)
                                    }
                                    {
                                        this.state.Playstation_3rd ?
                                            (
                                                <div id="dropdown-content-3rd-playstation" className="dropdown-content-3rd" onMouseOver={this.Show_Playstation_Dropdown_3rd} onMouseLeave={this.Hide_Playstation_Dropdown_3rd}>
                                                    <a className="dropdown-content-item-3rd" href="https://apshop.vn/collections/may-choi-game-playstation-4">Máy Playstation 4</a>
                                                    <a className="dropdown-content-item-3rd" href="https://apshop.vn/collections/game-playstation-4">Game Playstation 4</a>
                                                </div>
                                            ) : (null)
                                    }
                                    {
                                        this.state.Stream_3rd ?
                                            (
                                                <div id="dropdown-content-3rd-stream" className="dropdown-content-3rd" onMouseOver={this.Show_Stream_Dropdown_3rd} onMouseLeave={this.Hide_Stream_Dropdown_3rd}>
                                                    <a className="dropdown-content-item-3rd" href="https://apshop.vn/collections/thiet-bi-stream-corsair-elgato">Corsair Elgato</a>
                                                    <a className="dropdown-content-item-3rd" href="https://apshop.vn/collections/thiet-bi-stream-avermedia">Avermedia</a>
                                                    <a className="dropdown-content-item-3rd" href="https://apshop.vn/collections/thiet-bi-stream-razer">Razer</a>
                                                    <a className="dropdown-content-item-3rd" href="https://apshop.vn/collections/webcam-stream">Webcam Stream</a>
                                                </div>
                                            ) : (null)
                                    }
                                    {
                                        this.state.Accessories_3rd ?
                                            (
                                                <div id="dropdown-content-3rd-accesories" className="dropdown-content-3rd" onMouseOver={this.Show_Accessories_Dropdown_3rd} onMouseLeave={this.Hide_Accessories_Dropdown_3rd}>
                                                    <a className="dropdown-content-item-3rd" href="https://apshop.vn/collections/phu-kien-razer">Razer</a>
                                                    <a className="dropdown-content-item-3rd" href="https://apshop.vn/collections/phu-kien-steelseries">Steelseries</a>
                                                    <a className="dropdown-content-item-3rd" href="https://apshop.vn/collections/phu-kien-hyperx">HyperX</a>
                                                </div>
                                            ) : (null)
                                    }


                                    {
                                        this.state.Camera_conference_3rd ?
                                            (
                                                <div id="dropdown-content-3rd-cconference" className="dropdown-content-3rd" onMouseOver={this.Show_CConference_Dropdown_3rd} onMouseLeave={this.Hide_CConference_Dropdown_3rd}>
                                                    <a className="dropdown-content-item-3rd" href="https://apshop.vn/collections/camera-hoi-nghi-logitech">Camera Logitech</a>
                                                    <a className="dropdown-content-item-3rd" href="https://apshop.vn/collections/camera-hoi-nghi-jabra">Camera Jabra</a>
                                                </div>
                                            ) : (null)
                                    }
                                    {
                                        this.state.Computer_nuc_3rd ?
                                            (
                                                <div id="dropdown-content-3rd-nuccomputer" className="dropdown-content-3rd" onMouseOver={this.Show_Nuccomputer_Dropdown_3rd} onMouseLeave={this.Hide_Nuccomputer_Dropdown_3rd}>
                                                    <a className="dropdown-content-item-3rd" href="https://apshop.vn/collections/may-tinh-intel-nuc">INTEL NUC</a>
                                                    <a className="dropdown-content-item-3rd" href="https://apshop.vn/collections/may-tinh-mini-msi">MSI NUC</a>
                                                </div>
                                            ) : (null)
                                    }
                                    {
                                        this.state.Computer_aps_3rd ?
                                            (
                                                <div id="dropdown-content-3rd-nuccomputer" className="dropdown-content-3rd" onMouseOver={this.Show_Computeraps_Dropdown_3rd} onMouseLeave={this.Hide_Computeraps_Dropdown_3rd}>
                                                    <a className="dropdown-content-item-3rd" href="https://apshop.vn/collections/may-tinh-choi-game-ap-intel">APS INTEL GAME</a>
                                                    <a className="dropdown-content-item-3rd" href="https://apshop.vn/collections/may-tinh-choi-game-ap-amd">APS AMD GAME</a>
                                                    <a className="dropdown-content-item-3rd" href="https://apshop.vn/">APS INTEL RENDER</a>
                                                    <a className="dropdown-content-item-3rd" href="https://apshop.vn/">APS AMD RENDER</a>
                                                </div>
                                            ) : (null)
                                    }
                                    {
                                        this.state.Computer_msi_3rd ?
                                            (
                                                <div id="dropdown-content-3rd-nuccomputer" className="dropdown-content-3rd" onMouseOver={this.Show_Computermsi_Dropdown_3rd} onMouseLeave={this.Hide_Computermsi_Dropdown_3rd}>
                                                    <a className="dropdown-content-item-3rd" href="https://apshop.vn/collections/may-tinh-msi">Msi Trident</a>
                                                </div>
                                            ) : (null)
                                    }
                                    {
                                        this.state.Computer_intel_3rd ?
                                            (
                                                <div id="dropdown-content-3rd-nuccomputer" className="dropdown-content-3rd" onMouseOver={this.Show_Computerintel_Dropdown_3rd} onMouseLeave={this.Hide_Computerintel_Dropdown_3rd}>
                                                    <a className="dropdown-content-item-3rd" href="https://apshop.vn/collections/intel-nuc-hades-canyon">Intel NUC Hades Canyon</a>
                                                </div>
                                            ) : (null)
                                    }
                                    {
                                        this.state.Computer_dell_3rd ?
                                            (
                                                <div id="dropdown-content-3rd-nuccomputer" className="dropdown-content-3rd" onMouseOver={this.Show_Computerdell_Dropdown_3rd} onMouseLeave={this.Hide_Computerdell_Dropdown_3rd}>
                                                    <a className="dropdown-content-item-3rd" href="https://apshop.vn/collections/may-tinh-dell">DELL I5</a>
                                                    <a className="dropdown-content-item-3rd" href="https://apshop.vn/collections/may-tinh-dell">DELL I7</a>
                                                </div>
                                            ) : (null)
                                    }
                                    {
                                        this.state.CPU_3rd ?
                                            (
                                                <div id="dropdown-content-3rd-nuccomputer" className="dropdown-content-3rd" onMouseOver={this.Show_CPU_Dropdown_3rd} onMouseLeave={this.Hide_CPU_Dropdown_3rd}>
                                                    <a className="dropdown-content-item-3rd" href="https://apshop.vn/collections/cpu-intel">INTEL</a>
                                                    <a className="dropdown-content-item-3rd" href="https://apshop.vn/collections/cpu-amd">AMD</a>
                                                </div>
                                            ) : (null)
                                    }
                                    {
                                        this.state.Main_3rd ?
                                            (
                                                <div id="dropdown-content-3rd-nuccomputer" className="dropdown-content-3rd" onMouseOver={this.Show_Main_Dropdown_3rd} onMouseLeave={this.Hide_Main_Dropdown_3rd}>
                                                    <a className="dropdown-content-item-3rd" href="https://apshop.vn/collections/mainboard-msi">MSI</a>
                                                    <a className="dropdown-content-item-3rd" href="https://apshop.vn/collections/mainboard-asus">ASSUS</a>
                                                    <a className="dropdown-content-item-3rd" href="https://apshop.vn/collections/mainboard-gigabyte">GIGABYTE</a>
                                                    <a className="dropdown-content-item-3rd" href="https://apshop.vn/collections/mainboard-asrock">ASROCK</a>
                                                    <a className="dropdown-content-item-3rd" href="https://apshop.vn/collections/mainboard-supero">SUPERO</a>
                                                </div>
                                            ) : (null)
                                    }
                                    {
                                        this.state.VGA_3rd ?
                                            (
                                                <div id="dropdown-content-3rd-nuccomputer" className="dropdown-content-3rd" onMouseOver={this.Show_VGA_Dropdown_3rd} onMouseLeave={this.Hide_VGA_Dropdown_3rd}>
                                                    <a className="dropdown-content-item-3rd" href="https://apshop.vn/collections/card-man-hinh-msi">MSI</a>
                                                    <a className="dropdown-content-item-3rd" href="https://apshop.vn/collections/card-man-hinh-asus">ASSUS</a>
                                                    <a className="dropdown-content-item-3rd" href="https://apshop.vn/collections/vga-aorus">AORUS</a>
                                                    <a className="dropdown-content-item-3rd" href="https://apshop.vn/collections/vga-gigabyte">GIGABYTE</a>
                                                    <a className="dropdown-content-item-3rd" href="https://apshop.vn/collections/vga-galax">GALAX</a>
                                                    <a className="dropdown-content-item-3rd" href="https://apshop.vn/collections/vga-evga">EVGA</a>
                                                    <a className="dropdown-content-item-3rd" href="https://apshop.vn/collections/vga-quadro">QUADRO</a>
                                                </div>
                                            ) : (null)
                                    }
                                    {
                                        this.state.Ram_3rd ?
                                            (
                                                <div id="dropdown-content-3rd-nuccomputer" className="dropdown-content-3rd" onMouseOver={this.Show_RAM_Dropdown_3rd} onMouseLeave={this.Hide_RAM_Dropdown_3rd}>
                                                    <a className="dropdown-content-item-3rd" href="https://apshop.vn/collections/ram-hyperx">HYPERX</a>
                                                    <a className="dropdown-content-item-3rd" href="https://apshop.vn/collections/ram-corsair">CORSAIR</a>
                                                    <a className="dropdown-content-item-3rd" href="https://apshop.vn/collections/ram-gskill">GSKILL</a>
                                                    <a className="dropdown-content-item-3rd" href="https://apshop.vn/collections/ram-galax">GALAX</a>
                                                    <a className="dropdown-content-item-3rd" href="https://apshop.vn/collections/ram-ballistix">BALLISTIX</a>
                                                    <a className="dropdown-content-item-3rd" href="https://apshop.vn/collections/ram-team">TEAM</a>

                                                </div>
                                            ) : (null)
                                    }
                                    {
                                        this.state.SSD_3rd ?
                                            (
                                                <div id="dropdown-content-3rd-nuccomputer" className="dropdown-content-3rd" onMouseOver={this.Show_SSD_Dropdown_3rd} onMouseLeave={this.Hide_SSD_Dropdown_3rd}>
                                                    <a className="dropdown-content-item-3rd" href="https://apshop.vn/collections/ssd-samsung">SAMSUNG</a>
                                                    <a className="dropdown-content-item-3rd" href="https://apshop.vn/collections/ssd-galax">GALAX</a>
                                                    <a className="dropdown-content-item-3rd" href="https://apshop.vn/collections/ssd-kingston">KINGSTON</a>
                                                    <a className="dropdown-content-item-3rd" href="https://apshop.vn/collections/ssd-hyperx">HYPERX</a>
                                                    <a className="dropdown-content-item-3rd" href="https://apshop.vn/collections/ssd-plextor">PLEXTOR</a>
                                                    <a className="dropdown-content-item-3rd" href="https://apshop.vn/collections/ssd-western">WESTERN</a>
                                                    <a className="dropdown-content-item-3rd" href="https://apshop.vn/collections/ssd-corsair">CORSAIR</a>
                                                    <a className="dropdown-content-item-3rd" href="https://apshop.vn/collections/ssd-pny">PNY</a>
                                                    <a className="dropdown-content-item-3rd" href="https://apshop.vn/collections/ssd-team">TEAM</a>
                                                    <a className="dropdown-content-item-3rd" href="https://apshop.vn/collections/ssd-addlink">ADDLINK</a>
                                                </div>
                                            ) : (null)
                                    }
                                    {
                                        this.state.HDD_3rd ?
                                            (
                                                <div id="dropdown-content-3rd-nuccomputer" className="dropdown-content-3rd" onMouseOver={this.Show_HDD_Dropdown_3rd} onMouseLeave={this.Hide_HDD_Dropdown_3rd}>
                                                    <a className="dropdown-content-item-3rd" href="https://apshop.vn/collections/hdd-western">WESTERN</a>
                                                    <a className="dropdown-content-item-3rd" href="https://apshop.vn/collections/hdd-seagate">SEAGATE</a>
                                                </div>
                                            ) : (null)
                                    }
                                    {
                                        this.state.PSU_3rd ?
                                            (
                                                <div id="dropdown-content-3rd-nuccomputer" className="dropdown-content-3rd" onMouseOver={this.Show_PSU_Dropdown_3rd} onMouseLeave={this.Hide_PSU_Dropdown_3rd}>
                                                    <a className="dropdown-content-item-3rd" href="https://apshop.vn/collections/nguon-corsair">CORSAIR</a>
                                                    <a className="dropdown-content-item-3rd" href="https://apshop.vn/collections/nguon-super-flower">SUPER FLOWER</a>
                                                    <a className="dropdown-content-item-3rd" href="https://apshop.vn/collections/nguon-thermaltake">THERMALTAKE</a>
                                                    <a className="dropdown-content-item-3rd" href="https://apshop.vn/collections/nguon-cooler-master">COOLER MASTER</a>
                                                    <a className="dropdown-content-item-3rd" href="https://apshop.vn/collections/nguon-silverstone">SLIVERSTONE</a>
                                                    <a className="dropdown-content-item-3rd" href="https://apshop.vn/collections/nguon-seasonic">SEASONIC</a>
                                                    <a className="dropdown-content-item-3rd" href="https://apshop.vn/collections/nguon-xigmatek">XIGMATEK</a>
                                                    <a className="dropdown-content-item-3rd" href="https://apshop.vn/collections/nguon-nzxt">NZXT</a>
                                                    <a className="dropdown-content-item-3rd" href="https://apshop.vn/collections/nguon-xigmatek">XIGMATEK</a>
                                                    <a className="dropdown-content-item-3rd" href="https://apshop.vn/collections/nguon-cougar">COUGAR</a>

                                                </div>
                                            ) : (null)
                                    }
                                    {
                                        this.state.Case_3rd ?
                                            (
                                                <div id="dropdown-content-3rd-nuccomputer" className="dropdown-content-3rd" onMouseOver={this.Show_CASE_Dropdown_3rd} onMouseLeave={this.Hide_CASE_Dropdown_3rd}>
                                                    <a className="dropdown-content-item-3rd" href="https://apshop.vn/collections/case-nzxt">NZXT</a>
                                                    <a className="dropdown-content-item-3rd" href="https://apshop.vn/collections/case-aigo">AIGO</a>
                                                    <a className="dropdown-content-item-3rd" href="https://apshop.vn/collections/case-azza">AZZA</a>
                                                    <a className="dropdown-content-item-3rd" href="https://apshop.vn/collections/case-corsair">CORSAIR</a>
                                                    <a className="dropdown-content-item-3rd" href="https://apshop.vn/collections/case-sama">SAMA</a>
                                                    <a className="dropdown-content-item-3rd" href="https://apshop.vn/collections/case-thermaltake">THERMALTAKE</a>
                                                    <a className="dropdown-content-item-3rd" href="https://apshop.vn/collections/case-cooler-master">COOLER MASTER</a>
                                                    <a className="dropdown-content-item-3rd" href="https://apshop.vn/collections/case-cougar">COUGAR</a>
                                                    <a className="dropdown-content-item-3rd" href="https://apshop.vn/collections/case-xigmatek">XIGMATEK</a>
                                                </div>
                                            ) : (null)
                                    }
                                    {
                                        this.state.Heatsink_3rd ?
                                            (
                                                <div id="dropdown-content-3rd-nuccomputer" className="dropdown-content-3rd" onMouseOver={this.Show_Heatsink_Dropdown_3rd} onMouseLeave={this.Hide_Heatsink_Dropdown_3rd}>
                                                    <a className="dropdown-content-item-3rd" href="https://apshop.vn/collections/tan-nhiet-thermaltake">THERMALTAKE</a>
                                                    <a className="dropdown-content-item-3rd" href="https://apshop.vn/collections/tan-nhiet-nzxt">NZXT</a>
                                                    <a className="dropdown-content-item-3rd" href="https://apshop.vn/collections/tan-nhiet-cooler-master">COOLER MASTER</a>
                                                    <a className="dropdown-content-item-3rd" href="https://apshop.vn/collections/tan-nhiet-gigabyte">GIGABYTE</a>
                                                    <a className="dropdown-content-item-3rd" href="https://apshop.vn/collections/tan-nhiet-corsair">CORSAIR</a>
                                                    <a className="dropdown-content-item-3rd" href="https://apshop.vn/collections/tan-nhiet-deepcool">DEEPCOOL</a>
                                                </div>
                                            ) : (null)
                                    }
                                    {
                                        this.state.Fan_3rd ?
                                            (
                                                <div id="dropdown-content-3rd-nuccomputer" className="dropdown-content-3rd" onMouseOver={this.Show_Fan_Dropdown_3rd} onMouseLeave={this.Hide_Fan_Dropdown_3rd}>
                                                    <a className="dropdown-content-item-3rd" href="https://apshop.vn/collections/quat-tan-nhiet-corsair">CORSAIR</a>
                                                    <a className="dropdown-content-item-3rd" href="https://apshop.vn/collections/fan-thermaltake">THERMALTAKE</a>
                                                    <a className="dropdown-content-item-3rd" href="https://apshop.vn/collections/fan-ttpremium">TTPREMIUM</a>
                                                    <a className="dropdown-content-item-3rd" href="https://apshop.vn/collections/fan-aigo">AIGO</a>
                                                    <a className="dropdown-content-item-3rd" href="https://apshop.vn/collections/quat-tan-nhiet-nzxt">NZXT</a>
                                                </div>
                                            ) : (null)
                                    }
                                    {
                                        this.state.Custom_3rd ?
                                            (
                                                <div id="dropdown-content-3rd-nuccomputer" className="dropdown-content-3rd" onMouseOver={this.Show_Fancustom_Dropdown_3rd} onMouseLeave={this.Hide_Fancustom_Dropdown_3rd}>
                                                    <a className="dropdown-content-item-3rd" href="https://apshop.vn/collections/bo-tan-nuoc-custom">BỘ TẢN NƯỚC CUSTOM</a>
                                                    <a className="dropdown-content-item-3rd" href="https://apshop.vn/collections/cpu-water-block">CPU WATER BLOCK</a>
                                                    <a className="dropdown-content-item-3rd" href="https://apshop.vn/collections/radiator">RADIATOR</a>
                                                    <a className="dropdown-content-item-3rd" href="https://apshop.vn/collections/pump">PUMP</a>
                                                    <a className="dropdown-content-item-3rd" href="https://apshop.vn/collections/fitting">FITTING</a>
                                                    <a className="dropdown-content-item-3rd" href="https://apshop.vn/collections/cooling-nuoc-lam-mat">NOOLAND NƯỚC LÀM MÁT</a>
                                                    <a className="dropdown-content-item-3rd" href="https://apshop.vn/collections/phu-kien-tan-nhiet-custom">PHỤ KIỆN</a>

                                                </div>
                                            ) : (null)
                                    }
                                    {
                                        this.state.Chair_gaming_3rd ?
                                            (
                                                <div id="dropdown-content-3rd-nuccomputer" className="dropdown-content-3rd" onMouseOver={this.Show_ChairGaming_Dropdown_3rd} onMouseLeave={this.Hide_ChairGaming_Dropdown_3rd}>
                                                    <a className="dropdown-content-item-3rd" href="https://apshop.vn/collections/ghe-e-dra">E Dra</a>
                                                    <a className="dropdown-content-item-3rd" href="https://apshop.vn/collections/ghe-cougar">Cougar</a>
                                                    <a className="dropdown-content-item-3rd" href="https://apshop.vn/collections/ghe-dxracer">DXracer</a>
                                                    <a className="dropdown-content-item-3rd" href="https://apshop.vn/collections/ghe-noblechairs">Noblechairs</a>
                                                    <a className="dropdown-content-item-3rd" href="https://apshop.vn/collections/ghe-arena-racer">Arena Racer</a>
                                                    <a className="dropdown-content-item-3rd" href="https://apshop.vn/collections/ghe-ace-gaming">ACE</a>
                                                    <a className="dropdown-content-item-3rd" href="https://apshop.vn/collections/ghe-soleseat">Sole Seat</a>
                                                    <a className="dropdown-content-item-3rd" href="https://apshop.vn/collections/ghe-akracing">AKracing</a>
                                                </div>
                                            ) : (null)
                                    }
                                    {
                                        this.state.Table_gaming_3rd ?
                                            (
                                                <div id="dropdown-content-3rd-nuccomputer" className="dropdown-content-3rd" onMouseOver={this.Show_TableGaming_Dropdown_3rd} onMouseLeave={this.Hide_TableGaming_Dropdown_3rd}>
                                                    <a className="dropdown-content-item-3rd" href="https://apshop.vn/collections/ban-dxracer">DXRACER </a>
                                                    <a className="dropdown-content-item-3rd" href="https://apshop.vn/collections/ban-pseat-gaming">PSEAT GAMING</a>
                                                </div>
                                            ) : (null)
                                    }
                                    {
                                        this.state.Accessories_gaming_3rd ?
                                            (
                                                <div id="dropdown-content-3rd-nuccomputer" className="dropdown-content-3rd" onMouseOver={this.Show_AccessoriesGaming_Dropdown_3rd} onMouseLeave={this.Hide_AccessoriesGaming_Dropdown_3rd}>
                                                    <a className="dropdown-content-item-3rd" href="https://apshop.vn/collections/phu-kien-dxracer">PHỤ KIỆN DXRACER </a>
                                                </div>
                                            ) : (null)
                                    }
                                    {
                                        this.state.Audio_Headphone_3rd ?
                                            (
                                                <div id="dropdown-content-3rd-nuccomputer" className="dropdown-content-3rd" onMouseOver={this.Show_Audio_Headphone_Dropdown_3rd} onMouseLeave={this.Hide_Audio_Headphone_Dropdown_3rd}>
                                                    <a className="dropdown-content-item-3rd" href="https://apshop.vn/collections/tai-nghe-creative">CREATIVE</a>
                                                    <a className="dropdown-content-item-3rd" href="https://apshop.vn/collections/tai-nghe-skullcandy">SKULLCANDY</a>
                                                    <a className="dropdown-content-item-3rd" href="https://apshop.vn/collections/tai-nghe-sony">SONY</a>
                                                    <a className="dropdown-content-item-3rd" href="https://apshop.vn/collections/tai-nghe-jbl">JBL</a>
                                                    <a className="dropdown-content-item-3rd" href="https://apshop.vn/collections/tai-nghe-akg">AKG</a>
                                                    <a className="dropdown-content-item-3rd" href="https://apshop.vn/collections/tai-nghe-logitech-gaming">LOGITECH</a>
                                                    <a className="dropdown-content-item-3rd" href="https://apshop.vn/collections/tai-nghe-plantronics">PLANTRONICS</a>
                                                    <a className="dropdown-content-item-3rd" href="https://apshop.vn/collections/tai-nghe-harman-kardon">HARMAN KARDON</a>
                                                    <a className="dropdown-content-item-3rd" href="https://apshop.vn/collections/tai-nghe-audio-technica">AUDIO TECHICA</a>
                                                    <a className="dropdown-content-item-3rd" href="https://apshop.vn/collections/tai-nghe-marshall">MARSHALL</a>
                                                    <a className="dropdown-content-item-3rd" href="https://apshop.vn/collections/tai-nghe-bose">BOSE</a>
                                                    <a className="dropdown-content-item-3rd" href="https://apshop.vn/collections/true-wireless">TRUE WIRELESS</a>
                                                </div>
                                            ) : (null)
                                    }
                                    {
                                        this.state.Speaker_3rd ?
                                            (
                                                <div id="dropdown-content-3rd-nuccomputer" className="dropdown-content-3rd" onMouseOver={this.Show_Speaker_Dropdown_3rd} onMouseLeave={this.Hide_Speaker_Dropdown_3rd}>
                                                    <a className="dropdown-content-item-3rd" href="https://apshop.vn/collections/loa-devialet">Devialet</a>
                                                    <a className="dropdown-content-item-3rd" href="https://apshop.vn/collections/loa-audio-pro">Audio Pro</a>
                                                    <a className="dropdown-content-item-3rd" href="https://apshop.vn/collections/loa-creative">Creative</a>
                                                    <a className="dropdown-content-item-3rd" href="https://apshop.vn/collections/loa-jbl">JBL</a>
                                                    <a className="dropdown-content-item-3rd" href="https://apshop.vn/collections/loa-sony">Sony</a>
                                                    <a className="dropdown-content-item-3rd" href="https://apshop.vn/collections/loa-logitech">Logitech</a>
                                                    <a className="dropdown-content-item-3rd" href="https://apshop.vn/collections/loa-ultimate-ears">Ultimate Ears</a>
                                                    <a className="dropdown-content-item-3rd" href="https://apshop.vn/collections/loa-bosea">Bose</a>
                                                    <a className="dropdown-content-item-3rd" href="https://apshop.vn/collections/loa-marshall">Marshall</a>
                                                </div>
                                            ) : (null)
                                    }
                                    {
                                        this.state.Sound_card_3rd ?
                                            (
                                                <div id="dropdown-content-3rd-nuccomputer" className="dropdown-content-3rd" onMouseOver={this.Show_SoundCard_Dropdown_3rd} onMouseLeave={this.Hide_SoundCard_Dropdown_3rd}>
                                                    <a className="dropdown-content-item-3rd" href="https://apshop.vn/collections/card-am-thanh-creative">CREATIVE</a>
                                                </div>
                                            ) : (null)
                                    }
                                    {
                                        this.state.Office_mouse_3rd ?
                                            (
                                                <div id="dropdown-content-3rd-nuccomputer" className="dropdown-content-3rd" onMouseOver={this.Show_OfficeMouse_Dropdown_3rd} onMouseLeave={this.Hide_OfficeMouse_Dropdown_3rd}>
                                                    <a className="dropdown-content-item-3rd" href="https://apshop.vn/collections/chuot-logitech-van-phong">LOGITECH</a>
                                                    <a className="dropdown-content-item-3rd" href="https://apshop.vn/collections/chuot-microsoft">MICROSOFT</a>
                                                </div>
                                            ) : (null)
                                    }
                                    {
                                        this.state.Office_keyboard_3rd ?
                                            (
                                                <div id="dropdown-content-3rd-nuccomputer" className="dropdown-content-3rd" onMouseOver={this.Show_OfficeKeyboard_Dropdown_3rd} onMouseLeave={this.Hide_OfficeKeyboard_Dropdown_3rd}>
                                                    <a className="dropdown-content-item-3rd" href="https://apshop.vn/collections/ban-phim-logitech-van-phong">LOGITECH</a>
                                                    <a className="dropdown-content-item-3rd" href="https://apshop.vn/collections/ban-phim-dell-van-phong">DELL</a>
                                                </div>
                                            ) : (null)
                                    }
                                    {
                                        this.state.Office_headphone_3rd ?
                                            (
                                                <div id="dropdown-content-3rd-nuccomputer" className="dropdown-content-3rd" onMouseOver={this.Show_OfficeHeadphone_Dropdown_3rd} onMouseLeave={this.Hide_OfficeHeadphone_Dropdown_3rd}>
                                                    <a className="dropdown-content-item-3rd" href="https://apshop.vn/collections/tai-nghe-logitech">LOGITECH</a>
                                                </div>
                                            ) : (null)
                                    }
                                    {
                                        this.state.Office_webcam_3rd ?
                                            (
                                                <div id="dropdown-content-3rd-nuccomputer" className="dropdown-content-3rd" onMouseOver={this.Show_OfficeWebcam_Dropdown_3rd} onMouseLeave={this.Hide_OfficeWebcam_Dropdown_3rd}>
                                                    <a className="dropdown-content-item-3rd" href="https://apshop.vn/collections/webcam-logitech">WEBCAM LOGITECH</a>
                                                    <a className="dropdown-content-item-3rd" href="https://apshop.vn/collections/webcam-microsoft">WEBCAM MICROSOFT</a>
                                                </div>
                                            ) : (null)
                                    }
                                    {
                                        this.state.Office_usb_3rd ?
                                            (
                                                <div id="dropdown-content-3rd-nuccomputer" className="dropdown-content-3rd" onMouseOver={this.Show_OfficeUsb_Dropdown_3rd} onMouseLeave={this.Hide_OfficeUsb_Dropdown_3rd}>
                                                    <a className="dropdown-content-item-3rd" href="https://apshop.vn/collections/usb-corsair">USB CORSAIR</a>
                                                    <a className="dropdown-content-item-3rd" href="https://apshop.vn/collections/usb-lacie">USB LACIE</a>
                                                    <a className="dropdown-content-item-3rd" href="https://apshop.vn/collections/usb-sandisk">USB SANDISK</a>
                                                    <a className="dropdown-content-item-3rd" href="https://apshop.vn/collections/usb-hyperx">USB HYPERX</a>
                                                </div>
                                            ) : (null)
                                    }
                                    {
                                        this.state.Office_harddrive_3rd ?
                                            (
                                                <div id="dropdown-content-3rd-nuccomputer" className="dropdown-content-3rd" onMouseOver={this.Show_OfficeHarddrive_Dropdown_3rd} onMouseLeave={this.Hide_OfficeHarddrive_Dropdown_3rd}>
                                                    <a className="dropdown-content-item-3rd" href="https://apshop.vn/collections/o-cung-di-dong-western">Ổ CỨNG DI ĐỘNG WESTERN</a>
                                                    <a className="dropdown-content-item-3rd" href="https://apshop.vn/collections/o-cung-gan-ngoai-seagate">Ổ CỨNG DI ĐỘNG SEAGATE</a>
                                                </div>
                                            ) : (null)
                                    }
                                    {
                                        this.state.Office_balo_3rd ?
                                            (
                                                <div id="dropdown-content-3rd-nuccomputer" className="dropdown-content-3rd" onMouseOver={this.Show_OfficeBalo_Dropdown_3rd} onMouseLeave={this.Hide_OfficeBalo_Dropdown_3rd}>
                                                    <a className="dropdown-content-item-3rd" href="https://apshop.vn/collections/balo-rivacase">RIVACASE</a>
                                                    <a className="dropdown-content-item-3rd" href="https://apshop.vn/collections/balo-targus">TARGUS</a>
                                                </div>
                                            ) : (null)
                                    }
                                    {
                                        this.state.Office_software_3rd ?
                                            (
                                                <div id="dropdown-content-3rd-nuccomputer" className="dropdown-content-3rd" onMouseOver={this.Show_OfficeSoftware_Dropdown_3rd} onMouseLeave={this.Hide_OfficeSoftware_Dropdown_3rd}>
                                                    <a className="dropdown-content-item-3rd" href="https://apshop.vn/collections/phan-mem-windows">WINDOW</a>
                                                    <a className="dropdown-content-item-3rd" href="https://apshop.vn/collections/phan-mem-office">OFFICE</a>
                                                    <a className="dropdown-content-item-3rd" href="https://apshop.vn/collections/phan-mem-ung-dung-microsoft">MICROSOFT</a>
                                                    <a className="dropdown-content-item-3rd" href="https://apshop.vn/collections/phan-mem-kaspersky">KASPERSKY DIỆT VIRUS</a>
                                                </div>
                                            ) : (null)
                                    }
                                    {
                                        this.state.Another_smartwatch_3rd ?
                                            (
                                                <div id="dropdown-content-3rd-nuccomputer" className="dropdown-content-3rd" onMouseOver={this.Show_AnotherSmartwatch_Dropdown_3rd} onMouseLeave={this.Hide_AnotherSmartwatch_Dropdown_3rd}>
                                                    <a className="dropdown-content-item-3rd" href="https://apshop.vn/collections/do-ng-ho-thong-minh-garmin">GARMIN</a>
                                                    <a className="dropdown-content-item-3rd" href="https://apshop.vn/collections/dong-ho-thong-minh-amazfit">AMAZFIT</a>
                                                    <a className="dropdown-content-item-3rd" href="https://apshop.vn/collections/do-ng-ho-thong-minh-fitbit">FITBIT</a>
                                                </div>
                                            ) : (null)
                                    }
                                    {
                                        this.state.Another_camerajourney_3rd ?
                                            (
                                                <div id="dropdown-content-3rd-nuccomputer" className="dropdown-content-3rd" onMouseOver={this.Show_AnotherCameraJourney_Dropdown_3rd} onMouseLeave={this.Hide_AnotherCameraJourney_Dropdown_3rd}>
                                                    <a className="dropdown-content-item-3rd" href="https://apshop.vn/collections/camera-gopro">GOPRO</a>
                                                </div>
                                            ) : (null)
                                    }
                                </div>
                            </div>
                        ) : (null)
                }

            </div>
        )
    }
}
export default Dropdown;