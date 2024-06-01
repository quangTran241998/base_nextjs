import BaseRoute from "@/consts/baseRoute";

export const dataCountryFooter = [
  { country: "Singapore", id: "195" },
  { country: "China", id: "44" },
  { country: "Korea", id: "182" },
  { country: "Taiwan", id: "229" },
  { country: "Japan", id: "116" },
  { country: "Cambodia", id: "120" },
  { country: "Kazakhstan", id: "117" },
];

export const dataSupportClient = [
  { title: "aboutSkyFi", link: BaseRoute.About },
  { title: "contactUs", link: BaseRoute.Contact },
  { title: "trandingSettingEsim", link: BaseRoute.Instructions },
];

export const mocDataTrandingSettingEsim = {
  language: "EN",
  ios: [
    {
      model: null,
      version: "14,15,13,17,18,19,20",
      installationViaQrCode: {
        steps: {
          "1": "Go to Settings > Cellular/Mobile > Add Cellular/Mobile Plan.",
          "2": "Scan the QR Code.",
          "3": "Tap on 'Add Cellular Plan'.",
          "4": "Label the eSIM.",
          "5": "Choose preferred default line to call or send messages.",
          "6": "Choose the preferred line to use with iMessage, FaceTime, and Apple ID.",
          "7": "Choose the eSIM plan as your default line for Cellular Data and do not turn on 'Allow Cellular Data Switching' to prevent charges on your other line.",
          "8": "Your eSIM has been installed successfully, please scroll down to see the settings for accessing data.",
        },
        qrCodeData: "LPA:1$lpa.airalo.com$TEST",
        qrCodeUrl:
          "https://sandbox.airalo.com/qr?expires=1797582688&id=115516&signature=3ee338b2d3405e913f1961993947236cc5c6b6c6c1d22d5e7da6e1281b6cefe6",
      },
      installationManual: {
        steps: {
          "1": "Go to Settings > Cellular/Mobile > Add Cellular/Mobile Plan.",
          "2": "Tap on 'Enter Details Manually'.",
          "3": "Enter your SM-DP+ Address and Activation Code.",
          "4": "Tap on 'Add Cellular Plan'.",
          "5": "Label the eSIM.",
          "6": "Choose preferred default line to call or send messages.",
          "7": "Choose the preferred line to use with iMessage, FaceTime, and Apple ID.",
          "8": "Choose the eSIM plan as your default line for Cellular Data and do not turn on 'Allow Cellular Data Switching' to prevent charges on your other line.",
          "9": "Your eSIM has been installed successfully, please scroll down to see the settings for accessing data.",
        },
        smdpAddressAndActivationCode: "lpa.airalo.com",
      },
      networkSetup: {
        steps: {
          "1": "Select your eSIM under 'Cellular Plans'.",
          "2": "Ensure that 'Turn On This Line' is toggled on.",
          "3": "Go to 'Network Selection' and select the supported network.",
          "4": "Turn on the Data Roaming.",
          "5": "Need help? Chat with us.",
        },
        apnType: "manual",
        apnValue: "singleall",
        roaming: true,
      },
    },
  ],
  android: [
    {
      model: null,
      version: "SamSung,Realme,Oppo,Xiaomi",
      installationViaQrCode: {
        steps: {
          "1": "Go to Settings > Connections > SIM Card Manager.",
          "2": "Tap on 'Add Mobile Plan'.",
          "3": "Tap on 'Scan Carrier QR Code' and tap on 'Add'.",
          "4": "When the plan has been registered, tap 'Ok' to turn on a new mobile plan.",
          "5": "Your eSIM has been installed successfully, please scroll down to see the settings for accessing data.",
        },
        qrCodeData: "LPA:1$lpa.airalo.com$TEST",
        qrCodeUrl:
          "https://sandbox.airalo.com/qr?expires=1797582688&id=115516&signature=3ee338b2d3405e913f1961993947236cc5c6b6c6c1d22d5e7da6e1281b6cefe6",
      },
      installationManual: {
        steps: {
          "1": "Go to Settings > Connections > SIM Card Manager.",
          "2": "Tap on 'Add Mobile Plan'.",
          "3": "Tap on 'Scan Carrier QR Code' and tap on 'Enter code instead'.",
          "4": "Enter the Activation Code (SM-DP+ Address & Activation Code).",
          "5": "When the plan has been registered, tap 'Ok' to turn on a new mobile plan.",
          "6": "Your eSIM has been installed successfully, please scroll down to see the settings for accessing data.",
        },
        smdpAddressAndActivationCode: "lpa.airalo.com",
      },
      networkSetup: {
        steps: {
          "1": "In the 'SIM Card Manager' select your eSIM.",
          "2": "Ensure that your eSIM is turned on under 'Mobile Networks'.",
          "3": "Enable the Mobile Data.",
          "4": "Turn on the Data Roaming.",
          "5": "Go to Settings > Connections > Mobile networks > Network Operators.",
          "6": "Ensure that the supported network is selected.",
          "7": "Need help? Chat with us.",
        },
        apnType: "manual",
        apnValue: "singleall",
        roaming: true,
      },
    },
  ],
};

export const topics = [
  { label: "activateEsim", value: "activateEsim" },
  { label: "paymentProblems", value: "paymentProblems" },
  { label: "installEsim", value: "installEsim" },
  {
    label: "deviceCompatibilityWithESIM",
    value: "deviceCompatibilityWithESIM",
  },
  { label: "supportTech", value: "supportTech" },
  { label: "other", value: "other" },
];
