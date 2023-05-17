-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 17, 2023 at 08:15 AM
-- Server version: 10.4.22-MariaDB
-- PHP Version: 8.1.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `senastion_2`
--

-- --------------------------------------------------------

--
-- Table structure for table `aprendices`
--

CREATE TABLE `aprendices` (
  `idAprendiz` int(11) NOT NULL,
  `estadoAprendiz` tinyint(4) NOT NULL DEFAULT 1,
  `idUsuario` int(11) DEFAULT NULL,
  `idFicha` int(11) DEFAULT NULL,
  `idGrupoProyecto` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `aprendices`
--

INSERT INTO `aprendices` (`idAprendiz`, `estadoAprendiz`, `idUsuario`, `idFicha`, `idGrupoProyecto`) VALUES
(1, 1, 14, 1, NULL),
(2, 1, 18, 1, NULL),
(3, 1, 19, 1, NULL),
(4, 1, 20, 1, NULL),
(5, 1, 21, 1, NULL),
(6, 1, 15, 2, NULL),
(7, 1, 22, 2, NULL),
(8, 1, 23, 2, NULL),
(9, 1, 24, 2, NULL),
(10, 1, 25, 2, NULL),
(11, 1, 26, 2, NULL),
(12, 1, 16, 3, NULL),
(13, 1, 27, 3, NULL),
(14, 1, 28, 3, NULL),
(15, 1, 29, 3, NULL),
(16, 1, 17, 4, NULL),
(17, 1, 30, 4, NULL),
(18, 1, 31, 4, NULL),
(19, 1, 32, 4, NULL),
(20, 1, 33, 4, NULL),
(21, 1, 34, 4, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `comite`
--

CREATE TABLE `comite` (
  `idComite` int(11) NOT NULL,
  `fechaHora` datetime NOT NULL,
  `codigoComite` bigint(20) NOT NULL,
  `idProgramaCoordinacionAcademica` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `competencias`
--

CREATE TABLE `competencias` (
  `idCompetencia` int(11) NOT NULL,
  `nombreCompetencia` varchar(255) NOT NULL,
  `codigoCompetencia` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `competencias`
--

INSERT INTO `competencias` (`idCompetencia`, `nombreCompetencia`, `codigoCompetencia`) VALUES
(1, 'Javascript', 8689698),
(2, 'Cámaras', 564676),
(3, 'PHP', 4546546),
(4, 'NodeJs', 32532423),
(5, 'Montaje de Pantalla', 654364352),
(6, 'Arquitectura', 546345421),
(7, 'Java', 5443323218),
(8, 'Ingles', 8979868);

-- --------------------------------------------------------

--
-- Table structure for table `entrega_ficha`
--

CREATE TABLE `entrega_ficha` (
  `idEntregaFicha` int(11) NOT NULL,
  `ObservacionFicha` varchar(255) NOT NULL,
  `trimestre` int(11) NOT NULL,
  `fechaHora` datetime NOT NULL DEFAULT current_timestamp(),
  `idFicha` int(11) DEFAULT NULL,
  `idCompetencia` int(11) DEFAULT NULL,
  `idResultadoAprendizaje` int(11) DEFAULT NULL,
  `idUsuario` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `entrega_ficha`
--

INSERT INTO `entrega_ficha` (`idEntregaFicha`, `ObservacionFicha`, `trimestre`, `fechaHora`, `idFicha`, `idCompetencia`, `idResultadoAprendizaje`, `idUsuario`) VALUES
(1, 'La ficha presenta una mala convivencia entre los aprendices', 5, '2023-05-17 01:15:27', 1, 1, 1, 9),
(2, 'Son dispersos con los compañeros', 5, '2023-05-17 01:15:27', 1, 8, 5, 7),
(3, 'Tienen buena participación', 2, '2023-05-17 01:15:27', 3, 8, 6, 7);

-- --------------------------------------------------------

--
-- Table structure for table `estado_decision`
--

CREATE TABLE `estado_decision` (
  `idEstadoDecision` int(11) NOT NULL,
  `nombreEstadoDecision` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `estado_decision`
--

INSERT INTO `estado_decision` (`idEstadoDecision`, `nombreEstadoDecision`) VALUES
(1, 'Aprobado'),
(2, 'No Aprobado');

-- --------------------------------------------------------

--
-- Table structure for table `estado_quejas`
--

CREATE TABLE `estado_quejas` (
  `idEstadoQuejas` int(11) NOT NULL,
  `nombreEstadoQuejas` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `estado_quejas`
--

INSERT INTO `estado_quejas` (`idEstadoQuejas`, `nombreEstadoQuejas`) VALUES
(1, 'En Fila'),
(2, 'Citado'),
(3, 'Comité'),
(4, 'Finalizado');

-- --------------------------------------------------------

--
-- Table structure for table `fichas`
--

CREATE TABLE `fichas` (
  `idFicha` int(11) NOT NULL,
  `codigoFicha` bigint(20) NOT NULL,
  `directorFicha` varchar(255) NOT NULL,
  `voceroFicha` varchar(255) DEFAULT NULL,
  `idProgramaFormativo` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `fichas`
--

INSERT INTO `fichas` (`idFicha`, `codigoFicha`, `directorFicha`, `voceroFicha`, `idProgramaFormativo`) VALUES
(1, 2471446, 'Miguel Sanchez', 'Roberto Vargas', 1),
(2, 339532, 'Sofia Lopez', 'Valeria Hernandez', 1),
(3, 12352333, 'Carlos Rojas', 'Luis Gutierrez', 2),
(4, 57453343, 'Daniel Ortiz', 'Patricia Dias', 3);

-- --------------------------------------------------------

--
-- Table structure for table `motivos_comite`
--

CREATE TABLE `motivos_comite` (
  `idMotivoComite` int(11) NOT NULL,
  `nombreMotivo` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `motivos_comite`
--

INSERT INTO `motivos_comite` (`idMotivoComite`, `nombreMotivo`) VALUES
(1, 'Felicitaciones'),
(2, 'Bajo Rendimiento'),
(3, 'Deserción'),
(4, 'No Aplica');

-- --------------------------------------------------------

--
-- Table structure for table `observaciones_aprendiz`
--

CREATE TABLE `observaciones_aprendiz` (
  `idObservacionAprendiz` int(11) NOT NULL,
  `trimestre` int(11) NOT NULL,
  `fechaHora` datetime NOT NULL DEFAULT current_timestamp(),
  `ObservacionAprendiz` varchar(255) NOT NULL,
  `descripcionMotivo` varchar(255) DEFAULT NULL,
  `idEstadoDecision` int(11) DEFAULT NULL,
  `idMotivoComite` int(11) DEFAULT NULL,
  `idAprendiz` int(11) DEFAULT NULL,
  `idUsuario` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `observaciones_aprendiz`
--

INSERT INTO `observaciones_aprendiz` (`idObservacionAprendiz`, `trimestre`, `fechaHora`, `ObservacionAprendiz`, `descripcionMotivo`, `idEstadoDecision`, `idMotivoComite`, `idAprendiz`, `idUsuario`) VALUES
(1, 5, '2023-05-17 01:15:28', 'Buena participación', NULL, 1, 4, 1, 9),
(2, 5, '2023-05-17 01:15:28', 'Buena participación', NULL, 1, 4, 2, 9),
(3, 5, '2023-05-17 01:15:28', 'Baja participación', 'No presenta actividades necesarias', 2, 2, 3, 9),
(4, 5, '2023-05-17 01:15:28', 'Buena participación', NULL, 1, 4, 4, 9),
(5, 5, '2023-05-17 01:15:28', 'Buena participación', NULL, 1, 4, 5, 9),
(6, 5, '2023-05-17 01:15:28', 'Baja participación', 'Falta de entregas', 2, 2, 1, 7),
(7, 5, '2023-05-17 01:15:28', 'Baja participación', 'Perdida de exámenes', 2, 2, 2, 7),
(8, 5, '2023-05-17 01:15:28', 'Alta participación', 'Gran rendimiento en clase', 1, 1, 3, 7),
(9, 5, '2023-05-17 01:15:28', 'Baja participación', NULL, 1, 4, 4, 7),
(10, 5, '2023-05-17 01:15:28', 'Baja participación', NULL, 1, 4, 5, 7),
(11, 2, '2023-05-17 01:15:28', 'Buena participación', NULL, 1, 4, 12, 7),
(12, 2, '2023-05-17 01:15:28', 'Buena participación', NULL, 1, 4, 13, 7),
(13, 2, '2023-05-17 01:15:28', 'Buena participación', NULL, 1, 4, 14, 7),
(14, 2, '2023-05-17 01:15:28', 'No tiene presencia en clase', 'No se ha presentado a las clases', 2, 3, 15, 7);

-- --------------------------------------------------------

--
-- Table structure for table `permisos`
--

CREATE TABLE `permisos` (
  `idPermiso` int(11) NOT NULL,
  `nombrePermiso` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `permisos`
--

INSERT INTO `permisos` (`idPermiso`, `nombrePermiso`) VALUES
(1, 'Entrega de ficha'),
(2, 'Comité'),
(3, 'Quejas'),
(4, 'SPF'),
(5, 'Fichas'),
(6, 'Configuración');

-- --------------------------------------------------------

--
-- Table structure for table `plan_mejoramiento`
--

CREATE TABLE `plan_mejoramiento` (
  `idPlanMejoramiento` int(11) NOT NULL,
  `archivoPlanMejoramiento` blob DEFAULT NULL,
  `descripcionMotivo` varchar(255) DEFAULT NULL,
  `IdQueja` int(11) DEFAULT NULL,
  `idMotivoComite` int(11) DEFAULT NULL,
  `idEstadoDecision` int(11) DEFAULT NULL,
  `idAprendiz` int(11) DEFAULT NULL,
  `idUsuario` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `programas_formativos`
--

CREATE TABLE `programas_formativos` (
  `idProgramaFormativo` int(11) NOT NULL,
  `nombrePF` varchar(255) NOT NULL,
  `codigoPF` bigint(20) NOT NULL,
  `trimestres` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `programas_formativos`
--

INSERT INTO `programas_formativos` (`idProgramaFormativo`, `nombrePF`, `codigoPF`, `trimestres`) VALUES
(1, 'ADSO', 64354353, 7),
(2, 'ADSI', 5475656, 6),
(3, 'Cinematografía', 4365443543, 7);

-- --------------------------------------------------------

--
-- Table structure for table `programa_competencia`
--

CREATE TABLE `programa_competencia` (
  `idProgramaCompetencia` int(11) NOT NULL,
  `idProgramaFormativo` int(11) DEFAULT NULL,
  `idCompetencia` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `programa_competencia`
--

INSERT INTO `programa_competencia` (`idProgramaCompetencia`, `idProgramaFormativo`, `idCompetencia`) VALUES
(1, 1, 1),
(2, 1, 3),
(3, 1, 4),
(4, 1, 7),
(5, 1, 8),
(6, 2, 1),
(7, 2, 3),
(8, 2, 6),
(9, 2, 7),
(10, 2, 8),
(11, 3, 2),
(12, 3, 5),
(13, 3, 8);

-- --------------------------------------------------------

--
-- Table structure for table `programa_coordinacion_academica`
--

CREATE TABLE `programa_coordinacion_academica` (
  `idPCA` int(11) NOT NULL,
  `idProgramaFormativo` int(11) DEFAULT NULL,
  `idUsuario` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `programa_coordinacion_academica`
--

INSERT INTO `programa_coordinacion_academica` (`idPCA`, `idProgramaFormativo`, `idUsuario`) VALUES
(1, 1, 2),
(2, 1, 4),
(3, 2, 3);

-- --------------------------------------------------------

--
-- Table structure for table `quejas_comite`
--

CREATE TABLE `quejas_comite` (
  `idQueja` int(11) NOT NULL,
  `descripcionMotivo` varchar(255) NOT NULL,
  `decisionComite` varchar(255) DEFAULT NULL,
  `idMotivoComite` int(11) DEFAULT NULL,
  `idEstadoQueja` int(11) DEFAULT NULL,
  `idComite` int(11) DEFAULT NULL,
  `idAprendiz` int(11) DEFAULT NULL,
  `idUsuario` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `quejas_comite`
--

INSERT INTO `quejas_comite` (`idQueja`, `descripcionMotivo`, `decisionComite`, `idMotivoComite`, `idEstadoQueja`, `idComite`, `idAprendiz`, `idUsuario`) VALUES
(1, 'No presenta actividades necesarias', NULL, 2, 1, NULL, 3, 9),
(2, 'Falta de entregas', NULL, 2, 1, NULL, 1, 7),
(3, 'Perdida de exámenes', NULL, 2, 1, NULL, 2, 7),
(4, 'Gran rendimiento en clase', NULL, 1, 1, NULL, 3, 7),
(5, 'No se ha presentado a las clases', NULL, 3, 1, NULL, 15, 7);

-- --------------------------------------------------------

--
-- Table structure for table `resultado_aprendizaje`
--

CREATE TABLE `resultado_aprendizaje` (
  `idResultadoAprendizaje` int(11) NOT NULL,
  `nombreRA` varchar(255) NOT NULL,
  `codigoRA` bigint(20) NOT NULL,
  `IdCompetencia` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `resultado_aprendizaje`
--

INSERT INTO `resultado_aprendizaje` (`idResultadoAprendizaje`, `nombreRA`, `codigoRA`, `IdCompetencia`) VALUES
(1, 'Desarrollo y ejecución de código para web', 122312, 1),
(2, 'Camaritas', 252345221, 2),
(3, 'Camarotas', 6453242354, 2),
(4, 'Pantalla verde y su resolución', 65756542, 5),
(5, 'Verbo ToBe', 3241323213, 8),
(6, 'Pasado simple', 323242125, 8);

-- --------------------------------------------------------

--
-- Table structure for table `roles`
--

CREATE TABLE `roles` (
  `idRol` int(11) NOT NULL,
  `nombreRol` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `roles`
--

INSERT INTO `roles` (`idRol`, `nombreRol`) VALUES
(1, 'Administrador'),
(2, 'Coordinador'),
(3, 'AsistenteCoordinador'),
(4, 'AdminInstructor'),
(5, 'Instructor'),
(6, 'Aprendiz');

-- --------------------------------------------------------

--
-- Table structure for table `roles_permisos`
--

CREATE TABLE `roles_permisos` (
  `idRolPermiso` int(11) NOT NULL,
  `idRol` int(11) DEFAULT NULL,
  `idPermiso` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `roles_permisos`
--

INSERT INTO `roles_permisos` (`idRolPermiso`, `idRol`, `idPermiso`) VALUES
(1, 1, 5),
(2, 1, 6),
(3, 2, 1),
(4, 2, 2),
(5, 2, 4),
(6, 2, 5),
(7, 2, 6),
(8, 3, 1),
(9, 3, 2),
(10, 3, 4),
(11, 3, 5),
(12, 3, 6),
(13, 4, 1),
(14, 4, 3),
(15, 4, 4),
(16, 4, 5),
(17, 4, 6),
(18, 5, 1),
(19, 5, 3),
(20, 5, 4),
(21, 5, 5),
(22, 6, 4),
(23, 6, 5);

-- --------------------------------------------------------

--
-- Table structure for table `spf_archivos_proyecto`
--

CREATE TABLE `spf_archivos_proyecto` (
  `idArchivosProyecto` int(11) NOT NULL,
  `observacionArchivoProyecto` varchar(255) NOT NULL,
  `fechaHora` datetime NOT NULL,
  `archivoProyecto` blob NOT NULL,
  `idTipoArchivo` int(11) DEFAULT NULL,
  `idGrupoProyecto` int(11) DEFAULT NULL,
  `idUsuario` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `spf_grupos_proyecto`
--

CREATE TABLE `spf_grupos_proyecto` (
  `idGrupoProyecto` int(11) NOT NULL,
  `nombreProyecto` varchar(255) NOT NULL,
  `idFicha` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `spf_tipo_archivo`
--

CREATE TABLE `spf_tipo_archivo` (
  `idTipoArchivo` int(11) NOT NULL,
  `nombreTipoArchivo` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `tipo_documento`
--

CREATE TABLE `tipo_documento` (
  `idTipoDocumento` int(11) NOT NULL,
  `nombreTipoDocumento` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tipo_documento`
--

INSERT INTO `tipo_documento` (`idTipoDocumento`, `nombreTipoDocumento`) VALUES
(1, 'Cédula Ciudadana'),
(2, 'Tarjeta de Identidad'),
(3, 'Veneco');

-- --------------------------------------------------------

--
-- Table structure for table `usuarios`
--

CREATE TABLE `usuarios` (
  `idUsuario` int(11) NOT NULL,
  `documento` bigint(20) NOT NULL,
  `nombre` varchar(255) NOT NULL,
  `apellidos` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `telefono` bigint(20) NOT NULL,
  `password` varchar(255) NOT NULL,
  `idTipoDocumento` int(11) DEFAULT NULL,
  `idRol` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `usuarios`
--

INSERT INTO `usuarios` (`idUsuario`, `documento`, `nombre`, `apellidos`, `email`, `telefono`, `password`, `idTipoDocumento`, `idRol`) VALUES
(1, 7686774452, 'Administrador', 'aa', 'admin@mail.com', 3524214142, '1234', 1, 1),
(2, 1234567890, 'Juan', 'Perez', 'jperez@mail.com', 1234567890, '1234', 1, 2),
(3, 2345678901, 'Ana', 'Garcia', 'agarcia@mail.com', 2345678901, '1234', 1, 2),
(4, 3456789012, 'Pedro', 'Gonzalez', 'pgonzalez@mail.com', 3456789012, '1234', 1, 3),
(5, 4567890123, 'Laura', 'Torres', 'ltorres@mail.com', 4567890123, '1234', 1, 4),
(6, 5678901234, 'Jose', 'Fernandez', 'jfernandez@mail.com', 5678901234, '1234', 1, 5),
(7, 6789012345, 'Sofia', 'Lopez', 'slopez@mail.com', 6789012345, '1234', 1, 5),
(8, 7890123456, 'Miguel', 'Sanchez', 'msanchez@mail.com', 7890123456, '1234', 1, 5),
(9, 8901234567, 'Martha', 'Jimenez', 'mjimenez@mail.com', 8901234567, '1234', 1, 5),
(10, 9012345678, 'Carlos', 'Rojas', 'crojas@mail.com', 9012345678, '1234', 1, 5),
(11, 1234567891, 'Lucia', 'Ramirez', 'lramirez@mail.com', 1234567891, '1234', 1, 5),
(12, 2345678902, 'Daniel', 'Ortiz', 'dortiz@mail.com', 2345678902, '1234', 1, 5),
(13, 3456789013, 'Marcelo', 'Castro', 'mcastro@mail.com', 3456789013, '1234', 1, 5),
(14, 4567890124, 'Roberto', 'Vargas', 'rvargas@mail.com', 4567890124, '1234', 1, 6),
(15, 5678901235, 'Valeria', 'Hernandez', 'vhernandez@mail.com', 5678901235, '1234', 1, 6),
(16, 6789012346, 'Luis', 'Gutierrez', 'lgutierrez@mail.com', 6789012346, '1234', 1, 6),
(17, 7890123457, 'Patricia', 'Dias', 'pdiaz@mail.com', 7890123457, '1234', 1, 6),
(18, 8901234568, 'Mario', 'Gallego', 'mgallego@mail.com', 8901234568, '1234', 1, 6),
(19, 718872348, 'Erick', 'Wright', 'erick.wright@example.com', 7066202003, '1234', 1, 6),
(20, 5539538119, 'Lisa', 'Bell', 'lisa.bell@example.com', 2156524915, '1234', 1, 6),
(21, 264014921, 'Kathryn', 'Robinson', 'kathryn.robinson@example.com', 7544971501, '1234', 2, 6),
(22, 610901787, 'Kaitlin', 'Morales', 'kaitlyn.morales@example.com', 8482200053, '1234', 1, 6),
(23, 609180333, 'Jason', 'Castillo', 'jason.castillo@example.com', 3177484874, '1234', 2, 6),
(24, 1925963085, 'Savannah', 'Kim', 'savannah.kim@example.com', 3947379661, '1234', 1, 6),
(25, 462125873, 'Hayden', 'Vargas', 'hayden.vargas@example.com', 8594985166, '1234', 1, 6),
(26, 861121028, 'Barbara', 'Cunningham', 'barbara.cunningham@example.com', 4293172112, '1234', 2, 6),
(27, 568660759, 'Carmen', 'Lane', 'carmen.lane@example.com', 4699774818, '1234', 1, 6),
(28, 710744824, 'Gloria', 'Gonzalez', 'gloria.gonzalez@example.com', 7134086407, '1234', 1, 6),
(29, 875098943, 'Gabrielle', 'Holland', 'gabrielle.holland@example.com', 4258601582, '1234', 1, 6),
(30, 168096542, 'Preston', 'Greer', 'preston.greer@example.com', 3033344184, '1234', 1, 6),
(31, 1475756955, 'Jenna', 'Riley', 'jenna.riley@example.com', 2801272447, '1234', 2, 6),
(32, 346504186, 'Ronnie', 'Ferguson', 'ronnie.ferguson@example.com', 2948818013, '1234', 1, 6),
(33, 690547647, 'Connors', 'Robinson', 'connor.robinson@example.com', 8204368283, '1234', 1, 6),
(34, 873912559, 'Eva', 'Phillips', 'eva.phillips@example.com', 2024418116, '1234', 2, 6);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `aprendices`
--
ALTER TABLE `aprendices`
  ADD PRIMARY KEY (`idAprendiz`),
  ADD KEY `FK_7fc86daba74a06bdc5f26cf63e3` (`idFicha`),
  ADD KEY `FK_a6c62d02a0324cbb49a54476fb0` (`idUsuario`),
  ADD KEY `FK_aff3ca6fd5c5ab99c75dc14b1ec` (`idGrupoProyecto`);

--
-- Indexes for table `comite`
--
ALTER TABLE `comite`
  ADD PRIMARY KEY (`idComite`),
  ADD KEY `FK_c7c44368dd4c9e3662d8cc7ad9c` (`idProgramaCoordinacionAcademica`);

--
-- Indexes for table `competencias`
--
ALTER TABLE `competencias`
  ADD PRIMARY KEY (`idCompetencia`);

--
-- Indexes for table `entrega_ficha`
--
ALTER TABLE `entrega_ficha`
  ADD PRIMARY KEY (`idEntregaFicha`),
  ADD KEY `FK_a6391b0ed37c6a6ad0c2385e1b0` (`idFicha`),
  ADD KEY `FK_aa4f27bc5f38f5a3db9ee521d6b` (`idUsuario`),
  ADD KEY `FK_c09d3718053faa4c2f53427d81f` (`idCompetencia`),
  ADD KEY `FK_f9305758cd73ea82b80f54dc18a` (`idResultadoAprendizaje`);

--
-- Indexes for table `estado_decision`
--
ALTER TABLE `estado_decision`
  ADD PRIMARY KEY (`idEstadoDecision`);

--
-- Indexes for table `estado_quejas`
--
ALTER TABLE `estado_quejas`
  ADD PRIMARY KEY (`idEstadoQuejas`);

--
-- Indexes for table `fichas`
--
ALTER TABLE `fichas`
  ADD PRIMARY KEY (`idFicha`),
  ADD KEY `FK_7d72ed522664f044d0181dd6501` (`idProgramaFormativo`);

--
-- Indexes for table `motivos_comite`
--
ALTER TABLE `motivos_comite`
  ADD PRIMARY KEY (`idMotivoComite`);

--
-- Indexes for table `observaciones_aprendiz`
--
ALTER TABLE `observaciones_aprendiz`
  ADD PRIMARY KEY (`idObservacionAprendiz`),
  ADD KEY `FK_46cc9b2e3d5a6771cb806ad1536` (`idMotivoComite`),
  ADD KEY `FK_c20db6b5f92c9d4cf0091c74fe2` (`idUsuario`),
  ADD KEY `FK_cf2c2fd851119704859ca35d370` (`idAprendiz`),
  ADD KEY `FK_f2f1c97175be98478e292f72b33` (`idEstadoDecision`);

--
-- Indexes for table `permisos`
--
ALTER TABLE `permisos`
  ADD PRIMARY KEY (`idPermiso`);

--
-- Indexes for table `plan_mejoramiento`
--
ALTER TABLE `plan_mejoramiento`
  ADD PRIMARY KEY (`idPlanMejoramiento`),
  ADD KEY `FK_47359ae928c0f0c37e3ca8d8848` (`idEstadoDecision`),
  ADD KEY `FK_5b768ce2dada11dab96e2fc7ee6` (`idUsuario`),
  ADD KEY `FK_6be813facd601eb0217ff054e4b` (`idAprendiz`),
  ADD KEY `FK_73630a2fb200e87e307b6ec8e7e` (`idMotivoComite`),
  ADD KEY `FK_d180f7f57f834198ff5e84cad10` (`IdQueja`);

--
-- Indexes for table `programas_formativos`
--
ALTER TABLE `programas_formativos`
  ADD PRIMARY KEY (`idProgramaFormativo`);

--
-- Indexes for table `programa_competencia`
--
ALTER TABLE `programa_competencia`
  ADD PRIMARY KEY (`idProgramaCompetencia`),
  ADD KEY `FK_0a061298d0bcf5e9cceb88a2978` (`idProgramaFormativo`),
  ADD KEY `FK_6681cf0800cdf422d48746fe46b` (`idCompetencia`);

--
-- Indexes for table `programa_coordinacion_academica`
--
ALTER TABLE `programa_coordinacion_academica`
  ADD PRIMARY KEY (`idPCA`),
  ADD KEY `FK_6fa94f73ac03533bd39266abcbe` (`idUsuario`),
  ADD KEY `FK_8bd886b99f79bcf69d36d81dc03` (`idProgramaFormativo`);

--
-- Indexes for table `quejas_comite`
--
ALTER TABLE `quejas_comite`
  ADD PRIMARY KEY (`idQueja`),
  ADD KEY `FK_20035e996089f892e9cf65b7b9f` (`idAprendiz`),
  ADD KEY `FK_a0d91cf619ae50f7c5a294e6a29` (`idEstadoQueja`),
  ADD KEY `FK_a7533f040fe917ad7149242c3ab` (`idComite`),
  ADD KEY `FK_ce6142f6ad09111d469db272693` (`idMotivoComite`),
  ADD KEY `FK_dd325006f37ca8b424ca211f6c1` (`idUsuario`);

--
-- Indexes for table `resultado_aprendizaje`
--
ALTER TABLE `resultado_aprendizaje`
  ADD PRIMARY KEY (`idResultadoAprendizaje`),
  ADD KEY `FK_9bf2b637da016d9c799b6b0dfd6` (`IdCompetencia`);

--
-- Indexes for table `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`idRol`);

--
-- Indexes for table `roles_permisos`
--
ALTER TABLE `roles_permisos`
  ADD PRIMARY KEY (`idRolPermiso`),
  ADD KEY `FK_1d34a4fffb5474d1513d3018f0c` (`idRol`),
  ADD KEY `FK_ac8fc5c3587bcad4edae7ae1bd9` (`idPermiso`);

--
-- Indexes for table `spf_archivos_proyecto`
--
ALTER TABLE `spf_archivos_proyecto`
  ADD PRIMARY KEY (`idArchivosProyecto`),
  ADD KEY `FK_298401ec45b0ff81ffe58a6a238` (`idTipoArchivo`),
  ADD KEY `FK_874d5924a3cf35c358ca2014377` (`idUsuario`),
  ADD KEY `FK_9549eebdf05eef6892b805f9c82` (`idGrupoProyecto`);

--
-- Indexes for table `spf_grupos_proyecto`
--
ALTER TABLE `spf_grupos_proyecto`
  ADD PRIMARY KEY (`idGrupoProyecto`),
  ADD KEY `FK_32b8f0b4361098c261e5bd7d448` (`idFicha`);

--
-- Indexes for table `spf_tipo_archivo`
--
ALTER TABLE `spf_tipo_archivo`
  ADD PRIMARY KEY (`idTipoArchivo`);

--
-- Indexes for table `tipo_documento`
--
ALTER TABLE `tipo_documento`
  ADD PRIMARY KEY (`idTipoDocumento`);

--
-- Indexes for table `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`idUsuario`),
  ADD UNIQUE KEY `IDX_604e2077971f192d85cffb5c43` (`documento`),
  ADD UNIQUE KEY `IDX_446adfc18b35418aac32ae0b7b` (`email`),
  ADD KEY `FK_1cd486e9216c66d450ef9b70740` (`idRol`),
  ADD KEY `FK_52bb2c1c0e9c6ba0f0c1e8250ff` (`idTipoDocumento`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `aprendices`
--
ALTER TABLE `aprendices`
  MODIFY `idAprendiz` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- AUTO_INCREMENT for table `comite`
--
ALTER TABLE `comite`
  MODIFY `idComite` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `competencias`
--
ALTER TABLE `competencias`
  MODIFY `idCompetencia` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `entrega_ficha`
--
ALTER TABLE `entrega_ficha`
  MODIFY `idEntregaFicha` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `estado_decision`
--
ALTER TABLE `estado_decision`
  MODIFY `idEstadoDecision` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `estado_quejas`
--
ALTER TABLE `estado_quejas`
  MODIFY `idEstadoQuejas` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `fichas`
--
ALTER TABLE `fichas`
  MODIFY `idFicha` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `motivos_comite`
--
ALTER TABLE `motivos_comite`
  MODIFY `idMotivoComite` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `observaciones_aprendiz`
--
ALTER TABLE `observaciones_aprendiz`
  MODIFY `idObservacionAprendiz` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT for table `permisos`
--
ALTER TABLE `permisos`
  MODIFY `idPermiso` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `plan_mejoramiento`
--
ALTER TABLE `plan_mejoramiento`
  MODIFY `idPlanMejoramiento` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `programas_formativos`
--
ALTER TABLE `programas_formativos`
  MODIFY `idProgramaFormativo` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `programa_competencia`
--
ALTER TABLE `programa_competencia`
  MODIFY `idProgramaCompetencia` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT for table `programa_coordinacion_academica`
--
ALTER TABLE `programa_coordinacion_academica`
  MODIFY `idPCA` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `quejas_comite`
--
ALTER TABLE `quejas_comite`
  MODIFY `idQueja` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `resultado_aprendizaje`
--
ALTER TABLE `resultado_aprendizaje`
  MODIFY `idResultadoAprendizaje` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `roles`
--
ALTER TABLE `roles`
  MODIFY `idRol` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `roles_permisos`
--
ALTER TABLE `roles_permisos`
  MODIFY `idRolPermiso` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;

--
-- AUTO_INCREMENT for table `spf_archivos_proyecto`
--
ALTER TABLE `spf_archivos_proyecto`
  MODIFY `idArchivosProyecto` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `spf_grupos_proyecto`
--
ALTER TABLE `spf_grupos_proyecto`
  MODIFY `idGrupoProyecto` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `spf_tipo_archivo`
--
ALTER TABLE `spf_tipo_archivo`
  MODIFY `idTipoArchivo` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `tipo_documento`
--
ALTER TABLE `tipo_documento`
  MODIFY `idTipoDocumento` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `idUsuario` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=35;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `aprendices`
--
ALTER TABLE `aprendices`
  ADD CONSTRAINT `FK_7fc86daba74a06bdc5f26cf63e3` FOREIGN KEY (`idFicha`) REFERENCES `fichas` (`idFicha`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `FK_a6c62d02a0324cbb49a54476fb0` FOREIGN KEY (`idUsuario`) REFERENCES `usuarios` (`idUsuario`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `FK_aff3ca6fd5c5ab99c75dc14b1ec` FOREIGN KEY (`idGrupoProyecto`) REFERENCES `spf_grupos_proyecto` (`idGrupoProyecto`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `comite`
--
ALTER TABLE `comite`
  ADD CONSTRAINT `FK_c7c44368dd4c9e3662d8cc7ad9c` FOREIGN KEY (`idProgramaCoordinacionAcademica`) REFERENCES `programa_coordinacion_academica` (`idPCA`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `entrega_ficha`
--
ALTER TABLE `entrega_ficha`
  ADD CONSTRAINT `FK_a6391b0ed37c6a6ad0c2385e1b0` FOREIGN KEY (`idFicha`) REFERENCES `fichas` (`idFicha`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `FK_aa4f27bc5f38f5a3db9ee521d6b` FOREIGN KEY (`idUsuario`) REFERENCES `usuarios` (`idUsuario`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `FK_c09d3718053faa4c2f53427d81f` FOREIGN KEY (`idCompetencia`) REFERENCES `competencias` (`idCompetencia`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `FK_f9305758cd73ea82b80f54dc18a` FOREIGN KEY (`idResultadoAprendizaje`) REFERENCES `resultado_aprendizaje` (`idResultadoAprendizaje`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `fichas`
--
ALTER TABLE `fichas`
  ADD CONSTRAINT `FK_7d72ed522664f044d0181dd6501` FOREIGN KEY (`idProgramaFormativo`) REFERENCES `programas_formativos` (`idProgramaFormativo`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `observaciones_aprendiz`
--
ALTER TABLE `observaciones_aprendiz`
  ADD CONSTRAINT `FK_46cc9b2e3d5a6771cb806ad1536` FOREIGN KEY (`idMotivoComite`) REFERENCES `motivos_comite` (`idMotivoComite`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `FK_c20db6b5f92c9d4cf0091c74fe2` FOREIGN KEY (`idUsuario`) REFERENCES `usuarios` (`idUsuario`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `FK_cf2c2fd851119704859ca35d370` FOREIGN KEY (`idAprendiz`) REFERENCES `aprendices` (`idAprendiz`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `FK_f2f1c97175be98478e292f72b33` FOREIGN KEY (`idEstadoDecision`) REFERENCES `estado_decision` (`idEstadoDecision`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `plan_mejoramiento`
--
ALTER TABLE `plan_mejoramiento`
  ADD CONSTRAINT `FK_47359ae928c0f0c37e3ca8d8848` FOREIGN KEY (`idEstadoDecision`) REFERENCES `estado_decision` (`idEstadoDecision`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `FK_5b768ce2dada11dab96e2fc7ee6` FOREIGN KEY (`idUsuario`) REFERENCES `usuarios` (`idUsuario`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `FK_6be813facd601eb0217ff054e4b` FOREIGN KEY (`idAprendiz`) REFERENCES `aprendices` (`idAprendiz`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `FK_73630a2fb200e87e307b6ec8e7e` FOREIGN KEY (`idMotivoComite`) REFERENCES `motivos_comite` (`idMotivoComite`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `FK_d180f7f57f834198ff5e84cad10` FOREIGN KEY (`IdQueja`) REFERENCES `quejas_comite` (`idQueja`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `programa_competencia`
--
ALTER TABLE `programa_competencia`
  ADD CONSTRAINT `FK_0a061298d0bcf5e9cceb88a2978` FOREIGN KEY (`idProgramaFormativo`) REFERENCES `programas_formativos` (`idProgramaFormativo`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `FK_6681cf0800cdf422d48746fe46b` FOREIGN KEY (`idCompetencia`) REFERENCES `competencias` (`idCompetencia`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `programa_coordinacion_academica`
--
ALTER TABLE `programa_coordinacion_academica`
  ADD CONSTRAINT `FK_6fa94f73ac03533bd39266abcbe` FOREIGN KEY (`idUsuario`) REFERENCES `usuarios` (`idUsuario`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `FK_8bd886b99f79bcf69d36d81dc03` FOREIGN KEY (`idProgramaFormativo`) REFERENCES `programas_formativos` (`idProgramaFormativo`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `quejas_comite`
--
ALTER TABLE `quejas_comite`
  ADD CONSTRAINT `FK_20035e996089f892e9cf65b7b9f` FOREIGN KEY (`idAprendiz`) REFERENCES `aprendices` (`idAprendiz`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `FK_a0d91cf619ae50f7c5a294e6a29` FOREIGN KEY (`idEstadoQueja`) REFERENCES `estado_quejas` (`idEstadoQuejas`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `FK_a7533f040fe917ad7149242c3ab` FOREIGN KEY (`idComite`) REFERENCES `comite` (`idComite`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `FK_ce6142f6ad09111d469db272693` FOREIGN KEY (`idMotivoComite`) REFERENCES `motivos_comite` (`idMotivoComite`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `FK_dd325006f37ca8b424ca211f6c1` FOREIGN KEY (`idUsuario`) REFERENCES `usuarios` (`idUsuario`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `resultado_aprendizaje`
--
ALTER TABLE `resultado_aprendizaje`
  ADD CONSTRAINT `FK_9bf2b637da016d9c799b6b0dfd6` FOREIGN KEY (`IdCompetencia`) REFERENCES `competencias` (`idCompetencia`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `roles_permisos`
--
ALTER TABLE `roles_permisos`
  ADD CONSTRAINT `FK_1d34a4fffb5474d1513d3018f0c` FOREIGN KEY (`idRol`) REFERENCES `roles` (`idRol`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `FK_ac8fc5c3587bcad4edae7ae1bd9` FOREIGN KEY (`idPermiso`) REFERENCES `permisos` (`idPermiso`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `spf_archivos_proyecto`
--
ALTER TABLE `spf_archivos_proyecto`
  ADD CONSTRAINT `FK_298401ec45b0ff81ffe58a6a238` FOREIGN KEY (`idTipoArchivo`) REFERENCES `spf_tipo_archivo` (`idTipoArchivo`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `FK_874d5924a3cf35c358ca2014377` FOREIGN KEY (`idUsuario`) REFERENCES `usuarios` (`idUsuario`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `FK_9549eebdf05eef6892b805f9c82` FOREIGN KEY (`idGrupoProyecto`) REFERENCES `spf_grupos_proyecto` (`idGrupoProyecto`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `spf_grupos_proyecto`
--
ALTER TABLE `spf_grupos_proyecto`
  ADD CONSTRAINT `FK_32b8f0b4361098c261e5bd7d448` FOREIGN KEY (`idFicha`) REFERENCES `fichas` (`idFicha`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `usuarios`
--
ALTER TABLE `usuarios`
  ADD CONSTRAINT `FK_1cd486e9216c66d450ef9b70740` FOREIGN KEY (`idRol`) REFERENCES `roles` (`idRol`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `FK_52bb2c1c0e9c6ba0f0c1e8250ff` FOREIGN KEY (`idTipoDocumento`) REFERENCES `tipo_documento` (`idTipoDocumento`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
