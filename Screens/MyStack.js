import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Splash from './Splash';
import Otp from './Otp';
import Login from './Login';
import GetOtp from './GetOtp';
import Signup from './Signup';
import SelectBusiness from './SelectBusiness';
import SelectLanguage from './SelectLanguage';
import SubscribeNow from './SubscribeNow';
import PayNow from './PayNow';
import Main from './Main';
import Report from './Report';
import AddLocation from './AddLocation';
import Paid from './Paid';
import Receive from './Receive';
import ForgetPassword from './ForgetPassword';
import YourPin from './YourPin';
import MyProduct from './MyProduct';
import Store from './Store';
import Retry from './Retry';
import ServerError from './ServerError';
import AddProduct from './AddProduct'
import Payment from './Payment';
import Successfull from './Successfull';
import MyOrder from './MyOrder';
import ComplainHistory from './ComplainHistory';
import Incentive from './Incentive';
import NotFound from './NotFound';
import Notification from './Notification';
import Video from './Video';
import Expenses from './Expenses';
import Cash from './Cash';
import User from './User';
import Profile from './Profile';
import MyTabs from './MyTabs';
import Auction from './Auction';
import Review from './Review';
import Verification from './Verification';
import StartAuction from './StartAuction';
import Language from './Language';
import AuctionsDetails from './AuctionsDetails';
import MyInvoice from './MyInvoice';
import AddExpenses from './AddExpenses';
import ExpenseDetail from './ExpenseDetail';
import Bank from './Bank';
import AddBankAccount from './AddBankAccount';
import AddBankCash from './AddBankCash';
import ManageCash from './ManageCash';
import AddAgent from './AddAgent';
import SetIncentiveRate from './SetIncentiveRate';
import UpdateProfile from './UpdateProfile';
import PaymentReceipt from './PaymentReceipt';
const Stack = createNativeStackNavigator();
const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Splash" component={Splash} options={{ headerShown: false }} />
        <Stack.Screen name="Otp" component={Otp} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
        <Stack.Screen name="GetOtp" component={GetOtp} options={{ headerShown: false }} />
        <Stack.Screen name="Signup" component={Signup} options={{ headerShown: false }} />
        <Stack.Screen name="SelectBusiness" component={SelectBusiness} options={{ headerShown: false }} />
        <Stack.Screen name="SelectLanguage" component={SelectLanguage} options={{ headerShown: false }} />
        <Stack.Screen name="SubscribeNow" component={SubscribeNow} options={{ headerShown: false }} />
        <Stack.Screen name="PayNow" component={PayNow} options={{ headerShown: false }} />
        <Stack.Screen name="Report" component={Report} />
        <Stack.Screen name="Main" component={Main} />
        <Stack.Screen name="AddLocation" component={AddLocation} />
        <Stack.Screen name="Paid" component={Paid} />
        <Stack.Screen name="Receive" component={Receive} />
        <Stack.Screen name="ForgetPassword" component={ForgetPassword} />
        <Stack.Screen name="YourPin" component={YourPin} />
        <Stack.Screen name="MyProduct" component={MyProduct} />
        <Stack.Screen name="AddProduct" component={AddProduct} />
        <Stack.Screen name="Store" component={Store} />
        <Stack.Screen name="Retry" component={Retry} />
        <Stack.Screen name="ServerError" component={ServerError} options={{ headerShown: false }} />
        <Stack.Screen name="Payment" component={Payment} />
        <Stack.Screen name="Successfull" component={Successfull} />
        <Stack.Screen name="MyOrder" component={MyOrder} />
        <Stack.Screen name="ComplainHistory" component={ComplainHistory} />
        <Stack.Screen name="Incentive" component={Incentive} />
        <Stack.Screen name="NotFound" component={NotFound} />
        <Stack.Screen name="Video" component={Video} />
        <Stack.Screen name="Notification" component={Notification} />
        <Stack.Screen name="User" component={User} />
        <Stack.Screen name="Cash" component={Cash} />
        <Stack.Screen name="Expenses" component={Expenses} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="MyTabs" component={MyTabs} options={{ headerShown: false }} />
        <Stack.Screen name="Auction" component={Auction}/>
        <Stack.Screen name="Review" component={Review}/>
        <Stack.Screen name="Verification" component={Verification}/>
        <Stack.Screen name="StartAuction" component={StartAuction}/>
        <Stack.Screen name="Language" component={Language}/>
        <Stack.Screen name="AuctionsDetails" component={AuctionsDetails}/>
        <Stack.Screen name="MyInvoice" component={MyInvoice}/>
        <Stack.Screen name="AddExpenses" component={AddExpenses}/>
        <Stack.Screen name="ExpenseDetail" component={ExpenseDetail}/>
        <Stack.Screen name="Bank" component={Bank}/>
        <Stack.Screen name="AddBankAccount" component={AddBankAccount}/>
        <Stack.Screen name="AddBankCash" component={AddBankCash}/>
        <Stack.Screen name="ManageCash" component={ManageCash}/>
        <Stack.Screen name="AddAgent" component={AddAgent}/>
        <Stack.Screen name="SetIncentiveRate" component={SetIncentiveRate}/>
        <Stack.Screen name="UpdateProfile" component={UpdateProfile}/>
        <Stack.Screen name="PaymentReceipt" component={PaymentReceipt}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default MyStack;