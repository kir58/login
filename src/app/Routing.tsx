import { CardMedia, Tab, Tabs, Stack } from '@mui/material';
import { Link, Route, Routes } from 'react-router-dom';
import { SignIn } from '../pages/signIn';
import { Login } from '../pages/login';
import Box from '@mui/material/Box';
import logo from '../shared/assets/mindMoney.svg';
import demo from '../shared/assets/mindMoneyDemo.png';
import Typography from '@mui/material/Typography';
import { Link as CustomLink } from '../shared/ui';
import { useState } from 'react';

enum TabsEnum {
  signIn = 0,
  login = 1,
}

export const Routing = () => {
  const [activeTab, setActiveTab] = useState<TabsEnum>(TabsEnum.signIn);

  return (
    <Box
      display="grid"
      gridTemplateColumns={{ lg: '1fr 1fr', xl: '1fr 1fr', md: '1fr', sm: '1fr', xs: '1fr' }}
      bgcolor={(theme) => ({
        lg: theme.palette.grey['700'],
        xl: theme.palette.grey['700'],
        md: 'inherit',
        sm: 'inherit',
        xs: 'inherit',
      })}
      height="100dvh"
    >
      <Box display="flex" justifyContent="center" height="100%">
        <Stack>
          <Box marginY="24px" marginX="106px">
            <img src={logo} alt="logo" />
          </Box>
          <Box
            padding="48px 40px"
            margin="20px 64px"
            borderRadius="8px"
            bgcolor={(theme) => theme.palette.grey['900']}
            border={(theme) => ({
              xl: `1px solid ${theme.palette.grey['500']}`,
              lg: `1px solid ${theme.palette.grey['500']}`,
              md: 'none',
              sm: 'none',
              xs: 'none',
            })}
            width={{ lg: '561px', md: '480px', xl: '516px', sm: '480px', xs: '360px' }}
          >
            <Tabs
              component="div"
              TabIndicatorProps={{ style: { display: 'none' } }}
              variant="fullWidth"
              value={activeTab}
              onChange={(_, value) => setActiveTab(value)}
            >
              <Tab label="Sign In" value={TabsEnum.signIn} component={Link} to="/" />
              <Tab label="Login" value={TabsEnum.login} component={Link} to="/login" />
            </Tabs>
            <Routes>
              <Route path="/" element={<SignIn />} />
              <Route path="/login" element={<Login />} />
            </Routes>
          </Box>
          <Stack
            marginTop="auto"
            marginBottom="12px"
            direction="row"
            display={{ xs: 'none', sm: 'flex', md: 'flex', lg: 'flex', xl: 'flex' }}
            justifyContent={{
              xl: 'space-between',
              md: 'space-around',
              lg: 'space-around',
              sm: 'space-around',
              xs: 'space-around',
            }}
          >
            <Typography fontSize="12px" color={(theme) => theme.palette.text.secondary}>
              © 2024 MIND MONEY LIMITED
            </Typography>

            <Typography fontSize="12px" color={(theme) => theme.palette.text.secondary}>
              Have some issue? Wrote us <CustomLink href="">info@mind-money.eu</CustomLink>
            </Typography>
          </Stack>
        </Stack>
      </Box>
      <Box
        display={{ lg: 'grid', xl: 'grid', md: 'none', sm: 'none', xs: 'none' }}
        height="100%"
        width="100%"
      >
        <CardMedia image={demo}>
          <Box
            color={(theme) => theme.palette.grey['900']}
            marginX="64px"
            marginY={{ lg: '100px', xl: '156px' }}
          >
            <Box fontSize="40px">Start Investing in global stock markets</Box>
            <Box fontSize="16px" marginTop="24px">
              Mind.money.eu is the easiest place to invest your money and become a rich guy. Sign up
              and get started today free trial fo 14 days!
            </Box>
          </Box>
        </CardMedia>
      </Box>
    </Box>
  );
};
