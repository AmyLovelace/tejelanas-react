import { Box, Typography, IconButton, Tooltip, Divider } from "@mui/material";
import { FaReact, FaJs, FaNodeJs,FaGithub, FaYoutube } from "react-icons/fa";
import { SiMui, SiReactrouter,SiVite } from "react-icons/si";

const Footer = () => {
  return (
    <Box>
    <Box
      component="footer"
      sx={{
        backgroundColor: "#5b008e",
        color: "white",
        px: { xs: 2, sm: 4 },
        py: 4,
        mt: 8
      }}
    >
      <Box
        display="flex"
        flexDirection={{ xs: "column", md: "row" }}
        justifyContent="space-between"
        alignItems={{ xs: "flex-start", md: "center" }}
        gap={3}
      >
        {/* Sección izquierda */}
        <Box>
          <Typography variant="h6" fontWeight="bold" gutterBottom>
            Tejelanas Vivi
          </Typography>
          <Typography variant="body2">
            Plataforma desarrollada para el apoyo al emprendimiento local.
          </Typography>
          <Typography variant="body2" mt={1}>
            © {new Date().getFullYear()} Todos los derechos reservados.
          </Typography>
          {/* <Tooltip title="Canal de YouTube">
              <IconButton
                href="https://www.youtube.com/@MunicipalidaddeCholcholOficial/streams"
                target="_blank"
                rel="noopener"
                sx={{ color: "white", mt: 1 }}
              >
                <FaYoutube />
              </IconButton>
            </Tooltip> */}
        </Box>
 
<Box
  display="flex"
  flexDirection="column"
  alignItems={{ xs: "flex-start", md: "flex-end" }}
>
  <Typography variant="h6" fontWeight="bold" gutterBottom>
    Stack Tecnológico
  </Typography>
  <Box display="flex" flexWrap="wrap" gap={1}>
    <Tooltip title="JavaScript">
      <IconButton
        href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
        target="_blank"
        rel="noopener"
        sx={{ color: "white" }}
      >
        <FaJs />
      </IconButton>
    </Tooltip>
    <Tooltip title="React">
      <IconButton
        href="https://reactjs.org/"
        target="_blank"
        rel="noopener"
        sx={{ color: "white" }}
      >
        <FaReact />
      </IconButton>
    </Tooltip>
    <Tooltip title="Material UI">
      <IconButton
        href="https://mui.com/"
        target="_blank"
        rel="noopener"
        sx={{ color: "white" }}
      >
        <SiMui />
      </IconButton>
    </Tooltip>
    <Tooltip title="React Router">
      <IconButton
        href="https://reactrouter.com/"
        target="_blank"
        rel="noopener"
        sx={{ color: "white" }}
      >
        <SiReactrouter />
      </IconButton>
    </Tooltip>
    <Tooltip title="Node.js">
      <IconButton
        href="https://nodejs.org/"
        target="_blank"
        rel="noopener"
        sx={{ color: "white" }}
      >
        <FaNodeJs />
      </IconButton>
    </Tooltip>
    <Tooltip title="GitHub">
      <IconButton
        href="https://github.com/EmeRamirez/react-mui-ev2"
        target="_blank"
        rel="noopener"
        sx={{ color: "white" }}
      >
        <FaGithub />
      </IconButton>
    </Tooltip>
    <Tooltip title="Vite">
      <IconButton
        href="https://vite.dev/"
        target="_blank"
        rel="noopener"
        sx={{ color: "white" }}
      >
        <SiVite/>
      </IconButton>
    </Tooltip>
  </Box>
</Box>

      </Box>
    </Box>
    <Box textAlign="center"  display="flex" flexDirection={{ xs: "column", md: "column" }}

       sx={{
        backgroundColor: "#333",
        color: "white",
        pt:4,
        pb:4       
      }}>
        <Typography variant="body2">
        Desarrollado en IPSS - Frontend 2025 por:
        </Typography>
        <Typography variant="body2" fontWeight="bold">
          Emerson Ramírez, Amanecer Cabrera y Carlos Gonzalez
        </Typography>
      </Box>
      </Box>
    
  );
};

export default Footer;
