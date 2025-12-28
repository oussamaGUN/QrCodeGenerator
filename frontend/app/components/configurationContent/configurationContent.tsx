'use client'
import { Box, Typography } from "@mui/material"
import React from "react"
import UrlConfiguration from "./components/url";
import WifiConfiguration from "./components/wifi";
import VCardConfiguration from "./components/vcard";
import EmailConfiguration from "./components/email";
import PhoneConfiguration from "./components/phone";
import SmsConfiguration from "./components/sms";
import LocationConfiguration from "./components/location";
import TextConfiguration from "./components/text";
import EventConfiguration from "./components/event";
import AppStoreConfiguration from "./components/app-store";
import BitcoinConfiguration from "./components/bitcoin";
import FacebookConfiguration from "./components/facebook";
import InstagramConfiguration from "./components/instagram";
import TwitterConfiguration from "./components/twitter";
import YoutubeConfiguration from "./components/youtube";
import PdfConfiguration from "./components/pdf";
import ImageConfiguration from "./components/image";
import VideoConfiguration from "./components/video";
import Mp3Configuration from "./components/mp3";
import BarcodeConfiguration from "./components/barcode";
import FeedbackConfiguration from "./components/feedback";
import RatingConfiguration from "./components/rating";

const CONFIG_COMPONENTS: any = {
  1: UrlConfiguration,
  2: WifiConfiguration,
  3: VCardConfiguration,
  4: EmailConfiguration,
  5: PhoneConfiguration,
  6: SmsConfiguration,
  7: LocationConfiguration,
  8: TextConfiguration,
  9: EventConfiguration,
  10: AppStoreConfiguration,
  11: BitcoinConfiguration,
  12: FacebookConfiguration,
  13: InstagramConfiguration,
  14: TwitterConfiguration,
  15: YoutubeConfiguration,
  16: PdfConfiguration,
  17: ImageConfiguration,
  18: VideoConfiguration,
  19: Mp3Configuration,
  20: BarcodeConfiguration,
  21: FeedbackConfiguration,
  22: RatingConfiguration,
};

export default function ConfigurationContent({configuration}: {configuration: any}) {
  const Component = CONFIG_COMPONENTS[configuration.id];

  return Component ? <Component /> : null;
}
