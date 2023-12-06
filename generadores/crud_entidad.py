from re import sub




# TODO: Index (crud), controller (crud), service (crud + compararEntidad), DAO (crud)


def camel_case(s):
 s = sub(r"(_|-)+", " ", s).title().replace(" ", "")
 return ''.join([s[0].lower(), s[1:]])




FICHERO_INDEX = "{workspaceFolder}/src/routes/index.ts"
FICHERO_PRUEBAS = "src/routes/prueba.ts"
RUTA_TYPES = "{workspaceFolder}/src/types"
RUTA_CONTROLLER = "{workspaceFolder}/src/controller"
RUTA_SERVICE = "{workspaceFolder}src/service"
RUTA_DAO = "{workspaceFolder}src/dao"


NOMBRE_ENTIDAD = "CONTENEDOR" # CASA_BONITA
nomEntidadMinusNoCamel = NOMBRE_ENTIDAD.casefold() # casa_bonita
nomEntidadCamel = camel_case(nomEntidadMinusNoCamel) # casaBonita
nomEntidadMayusInicial = nomEntidadMinusNoCamel.capitalize() # CasaBonita


NOMBRE_ENTIDAD_PLURAL = "CONTENEDORES" # CASAS_BONITAS
nomEntidadMinusNoCamelPlural = NOMBRE_ENTIDAD_PLURAL.casefold() # casas_bonitas
nomEntidadCamelPlural = camel_case(nomEntidadMinusNoCamelPlural) # casasBonitas
nomEntidadMayusInicialPlural = nomEntidadMinusNoCamelPlural.capitalize() # casasBonitas



a = """Lorem ipsum dolor sit amet,
consectetur adipiscing elit,
sed do eiusmod {} incididunt
ut labore et dolore magna aliqua.""".format(FICHERO_INDEX)
print(a) 

# with open(FICHERO_PRUEBAS, 'a') as f:
#    f.write("Hola")
#    f.close()





