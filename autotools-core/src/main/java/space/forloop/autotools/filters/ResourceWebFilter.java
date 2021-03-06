/* Licensed under Apache-2.0 */
package space.forloop.autotools.filters;

import lombok.extern.slf4j.Slf4j;
import org.springframework.lang.NonNull;
import org.springframework.stereotype.Component;
import org.springframework.web.server.ServerWebExchange;
import org.springframework.web.server.WebFilter;
import org.springframework.web.server.WebFilterChain;
import reactor.core.publisher.Mono;

@Slf4j
@Component
public class ResourceWebFilter implements WebFilter {

  /**
   * This will force the index.html file from the webapp resource directory to be used when the user
   * hits the landing page.
   */
  @Override
  public Mono<Void> filter(final ServerWebExchange exchange, @NonNull final WebFilterChain chain) {
    return exchange.getRequest().getURI().getPath().equals("/")
        ? chain.filter(
            exchange
                .mutate()
                .request(exchange.getRequest().mutate().path("/index.html").build())
                .build())
        : chain.filter(exchange);
  }
}
