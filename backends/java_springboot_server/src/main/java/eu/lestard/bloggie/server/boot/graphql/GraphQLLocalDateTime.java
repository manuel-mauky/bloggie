package eu.lestard.bloggie.server.boot.graphql;

import java.time.LocalDateTime;

import com.zhokhov.graphql.datetime.DateTimeHelper;

import graphql.language.StringValue;
import graphql.schema.Coercing;
import graphql.schema.CoercingParseValueException;
import graphql.schema.CoercingSerializeException;
import graphql.schema.GraphQLScalarType;

/**
 * @author <a href='mailto:alexey@zhokhov.com'>Alexey Zhokhov</a>
 * Based on https://github.com/donbeave/graphql-java-datetime
 * Apache Licence 2
 *
 * I had to copy the file because I need to change the name to "DateTime".
 */
public class GraphQLLocalDateTime extends GraphQLScalarType {

    public GraphQLLocalDateTime() {
        super("DateTime", "Local Date Time type", new Coercing<LocalDateTime, String>() {
            private LocalDateTime convertImpl(Object input) {
                if (input instanceof String) {
                    LocalDateTime localDateTime = DateTimeHelper.parseDate((String) input);

                    return localDateTime;
                }
                return null;
            }

            @Override
            public String serialize(Object input) {
                if (input instanceof LocalDateTime) {
                    return DateTimeHelper.toISOString((LocalDateTime) input);
                } else {
                    LocalDateTime result = convertImpl(input);
                    if (result == null) {
                        throw new CoercingSerializeException("Invalid value '" + input + "' for LocalDateTime");
                    }
                    return DateTimeHelper.toISOString(result);
                }
            }

            @Override
            public LocalDateTime parseValue(Object input) {
                LocalDateTime result = convertImpl(input);
                if (result == null) {
                    throw new CoercingParseValueException("Invalid value '" + input + "' for LocalDateTime");
                }
                return result;
            }

            @Override
            public LocalDateTime parseLiteral(Object input) {
                if (!(input instanceof StringValue)) return null;
                String value = ((StringValue) input).getValue();
                LocalDateTime result = convertImpl(value);
                return result;
            }
        });
    }

}
