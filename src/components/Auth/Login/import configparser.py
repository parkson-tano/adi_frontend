import configparser


def parse_config(file_path):
    config = configparser.ConfigParser()
    config.read(file_path)

    # loop through sections and convert values to appropriate types
    data = {}
    for section in config.sections():
        section_data = {}
        for key, value in config.items(section):
            try:

                section_data[key] = int(value)
            except ValueError:
                try:

                    section_data[key] = float(value)
                except ValueError:
                    if value.lower() == "true" or value.lower() == "on":

                        section_data[key] = True
                    elif value.lower() == "false" or value.lower() == "off":

                        section_data[key] = False
                    else:
                        section_data[key] = value

        data[section] = section_data

    return data
