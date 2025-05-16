import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export const GitHub = ({ textColorClass }) => {
  return <GitHubIcon className={`size-6 ${textColorClass}`} />;
};

export const LinkedIn = ({ textColorClass }) => {
  return <LinkedInIcon className={`size-6 ${textColorClass}`} />;
};