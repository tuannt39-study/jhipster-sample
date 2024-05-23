package vn.com.msb;

import java.lang.annotation.ElementType;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;
import org.springframework.boot.test.context.SpringBootTest;
import vn.com.msb.config.AsyncSyncConfiguration;
import vn.com.msb.config.EmbeddedKafka;
import vn.com.msb.config.EmbeddedRedis;
import vn.com.msb.config.EmbeddedSQL;
import vn.com.msb.config.JacksonConfiguration;
import vn.com.msb.config.TestSecurityConfiguration;

/**
 * Base composite annotation for integration tests.
 */
@Target(ElementType.TYPE)
@Retention(RetentionPolicy.RUNTIME)
@SpringBootTest(classes = { DemoApp.class, JacksonConfiguration.class, AsyncSyncConfiguration.class, TestSecurityConfiguration.class })
@EmbeddedRedis
@EmbeddedSQL
@EmbeddedKafka
public @interface IntegrationTest {
}
