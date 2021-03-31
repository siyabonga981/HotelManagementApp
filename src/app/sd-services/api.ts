/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { Injectable } from '@angular/core'; //_splitter_
import {
  Router,
  NavigationEnd,
  NavigationStart,
  Resolve,
  ActivatedRouteSnapshot,
} from '@angular/router'; //_splitter_
import { MatSnackBar } from '@angular/material/snack-bar'; //_splitter_
import { SDBaseService } from '../../app/n-services/SDBaseService'; //_splitter_
//append_imports_end

declare const window: any;
declare const cordova: any;

@Injectable()
export class api {
  constructor(
    private sdService: SDBaseService,
    private router: Router,
    private matSnackBar: MatSnackBar
  ) {
    this.registerListeners();
  }
  registerListeners() {
    let bh = this.sdService.__constructDefault({});

    //append_listeners
  }

  //   service flows_api

  async addNewUser(key = '', body: any = undefined, ...others) {
    try {
      var bh = {
        input: {
          key: key,
          body: body,
        },
        local: {
          serverUrl: 'http://localhost:8081/api',
        },
      };
      bh = this.sdService.__constructDefault(bh);
      bh = await this.sd_nt78yKmXDH4Wge98(bh);
      //appendnew_next_addNewUser
      return (
        // formatting output variables
        {
          input: {},
          local: {
            serverUrl: bh.local.serverUrl,
          },
        }
      );
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_XHop4kBQn2QLlmJM');
    }
  }

  async getBookings(key = '', uid = '', ...others) {
    try {
      var bh = {
        input: {
          key: key,
          uid: uid,
        },
        local: {
          serverUrl: 'http://localhost:8081/api',
          result: undefined,
        },
      };
      bh = this.sdService.__constructDefault(bh);
      bh = await this.sd_fOaEHF5beoTyG4Ci(bh);
      //appendnew_next_getBookings
      return (
        // formatting output variables
        {
          input: {},
          local: {
            serverUrl: bh.local.serverUrl,
            result: bh.local.result,
          },
        }
      );
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_6a5CuHjURql5v2m8');
    }
  }

  async addToBookings(key = '', body = '', ...others) {
    try {
      var bh = {
        input: {
          key: key,
          body: body,
        },
        local: {
          serverUrl: 'http://localhost:8081/api',
        },
      };
      bh = this.sdService.__constructDefault(bh);
      bh = await this.sd_isxetN7iXDGyVsbL(bh);
      //appendnew_next_addToBookings
      return (
        // formatting output variables
        {
          input: {},
          local: {
            serverUrl: bh.local.serverUrl,
          },
        }
      );
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_Sb71yHzcoLY7ufq2');
    }
  }

  async loginUser(key = '', body: any = undefined, ...others) {
    try {
      var bh = {
        input: {
          key: key,
          body: body,
        },
        local: {
          serverUrl: 'http://localhost:8081',
          result: undefined,
        },
      };
      bh = this.sdService.__constructDefault(bh);
      bh = await this.sd_elbt9d8SPY0YTIry(bh);
      //appendnew_next_loginUser
      return (
        // formatting output variables
        {
          input: {},
          local: {
            serverUrl: bh.local.serverUrl,
            result: bh.local.result,
          },
        }
      );
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_ZiYXaPJQuoMlyRYs');
    }
  }

  async getUsers(key = '', ...others) {
    try {
      var bh = {
        input: {
          key: key,
        },
        local: {
          serverUrl: 'http://localhost:8081/api',
          result: undefined,
        },
      };
      bh = this.sdService.__constructDefault(bh);
      bh = await this.sd_SR4PipszhjvOyoDE(bh);
      //appendnew_next_getUsers
      return (
        // formatting output variables
        {
          input: {},
          local: {
            serverUrl: bh.local.serverUrl,
            result: bh.local.result,
          },
        }
      );
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_P5QQf9DH5nfBl9EG');
    }
  }

  async deleteBooking(key = '', id = '', ...others) {
    try {
      var bh = {
        input: {
          key: key,
          id: id,
        },
        local: {},
      };
      bh = this.sdService.__constructDefault(bh);
      bh = await this.sd_DKFqRNM3bsIa4FR6(bh);
      //appendnew_next_deleteBooking
      return (
        // formatting output variables
        {
          input: {},
          local: {},
        }
      );
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_KaOsf4D7uyyk8ajJ');
    }
  }

  //appendnew_flow_api_start

  async sd_nt78yKmXDH4Wge98(bh) {
    try {
      let url = `${bh.local.serverUrl}/${bh.input.key}`;
      bh = await this.sd_t28Yh6izCqpZPPlg(bh);
      //appendnew_next_sd_nt78yKmXDH4Wge98
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_nt78yKmXDH4Wge98');
    }
  }

  async sd_t28Yh6izCqpZPPlg(bh) {
    try {
      let basePath = bh.system.environment.properties.ssdURL.endsWith('/')
        ? bh.system.environment.properties.ssdURL
        : bh.system.environment.properties.ssdURL + '/';
      let url = `addNewUser/`;
      let finalUrl = basePath + url;
      let requestOptions = {
        url: finalUrl,
        method: 'post',
        responseType: 'json',
        reportProgress: undefined,
        headers: {},
        params: {},
        body: bh.input.body,
      };
      bh.local.result = await this.sdService.nHttpRequest(requestOptions);
      //appendnew_next_sd_t28Yh6izCqpZPPlg
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_t28Yh6izCqpZPPlg');
    }
  }

  async sd_fOaEHF5beoTyG4Ci(bh) {
    try {
      bh.queries = {
        uid: bh.input.uid,
      };
      bh = await this.sd_W5cbM9COQbvQNBS2(bh);
      //appendnew_next_sd_fOaEHF5beoTyG4Ci
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_fOaEHF5beoTyG4Ci');
    }
  }

  async sd_W5cbM9COQbvQNBS2(bh) {
    try {
      let basePath = bh.system.environment.properties.ssdURL.endsWith('/')
        ? bh.system.environment.properties.ssdURL
        : bh.system.environment.properties.ssdURL + '/';
      let url = `getBookings/`;
      let finalUrl = basePath + url;
      let requestOptions = {
        url: finalUrl,
        method: 'get',
        responseType: 'json',
        reportProgress: undefined,
        headers: {},
        params: bh.queries,
        body: bh.input.body,
      };
      bh.local.result = await this.sdService.nHttpRequest(requestOptions);
      //appendnew_next_sd_W5cbM9COQbvQNBS2
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_W5cbM9COQbvQNBS2');
    }
  }

  async sd_isxetN7iXDGyVsbL(bh) {
    try {
      let basePath = bh.system.environment.properties.ssdURL.endsWith('/')
        ? bh.system.environment.properties.ssdURL
        : bh.system.environment.properties.ssdURL + '/';
      let url = `addNewBooking/`;
      let finalUrl = basePath + url;
      let requestOptions = {
        url: finalUrl,
        method: 'post',
        responseType: 'json',
        reportProgress: undefined,
        headers: {},
        params: {},
        body: bh.input.body,
      };
      bh.result = await this.sdService.nHttpRequest(requestOptions);
      //appendnew_next_sd_isxetN7iXDGyVsbL
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_isxetN7iXDGyVsbL');
    }
  }

  async sd_elbt9d8SPY0YTIry(bh) {
    try {
      // let user = bh.input.body[0];
      // let users = bh.input.body[1];
      // for (let i = 0; i < users.length; i++) {
      //     var found = false;
      //     if (user.email.toLowerCase() == users[i].email.toLowerCase() && user.password == users[i].password) {
      //         found = true;
      //         user = users[i];
      //         console.log(user);
      //         sessionStorage.setItem('user', JSON.stringify(user));
      //     }
      // }
      // if (!found) {
      //     alert('Please enter correct credentials to continue');
      //     return false;
      // }
      bh = await this.sd_oljVg4ShlGkz6PeG(bh);
      //appendnew_next_sd_elbt9d8SPY0YTIry
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_elbt9d8SPY0YTIry');
    }
  }

  async sd_oljVg4ShlGkz6PeG(bh) {
    try {
      let basePath = bh.system.environment.properties.ssdURL.endsWith('/')
        ? bh.system.environment.properties.ssdURL
        : bh.system.environment.properties.ssdURL + '/';
      let url = `loginUsers/`;
      let finalUrl = basePath + url;
      let requestOptions = {
        url: finalUrl,
        method: 'get',
        responseType: 'json',
        reportProgress: undefined,
        headers: {},
        params: {},
        body: undefined,
      };
      bh.result = await this.sdService.nHttpRequest(requestOptions);
      bh = await this.sd_5JwissdCMZzG4r5V(bh);
      //appendnew_next_sd_oljVg4ShlGkz6PeG
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_oljVg4ShlGkz6PeG');
    }
  }

  async sd_5JwissdCMZzG4r5V(bh) {
    try {
      console.log(bh);
      //appendnew_next_sd_5JwissdCMZzG4r5V
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_5JwissdCMZzG4r5V');
    }
  }

  async sd_SR4PipszhjvOyoDE(bh) {
    try {
      let basePath = bh.system.environment.properties.ssdURL.endsWith('/')
        ? bh.system.environment.properties.ssdURL
        : bh.system.environment.properties.ssdURL + '/';
      let url = `getUsers/`;
      let finalUrl = basePath + url;
      let requestOptions = {
        url: finalUrl,
        method: 'get',
        responseType: 'json',
        reportProgress: undefined,
        headers: {},
        params: bh.queries,
        body: undefined,
      };
      bh.local.result = await this.sdService.nHttpRequest(requestOptions);
      //appendnew_next_sd_SR4PipszhjvOyoDE
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_SR4PipszhjvOyoDE');
    }
  }

  async sd_DKFqRNM3bsIa4FR6(bh) {
    try {
      console.log(bh);
      // bh.input.id = bh.input.body
      bh = await this.sd_tgM4MzN4bn5IsJh6(bh);
      //appendnew_next_sd_DKFqRNM3bsIa4FR6
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_DKFqRNM3bsIa4FR6');
    }
  }

  async sd_tgM4MzN4bn5IsJh6(bh) {
    try {
      let basePath = bh.system.environment.properties.ssdURL.endsWith('/')
        ? bh.system.environment.properties.ssdURL
        : bh.system.environment.properties.ssdURL + '/';
      let url = `deleteBooking/${bh.input.id}/`;
      let finalUrl = basePath + url;
      let requestOptions = {
        url: finalUrl,
        method: 'delete',
        responseType: 'json',
        reportProgress: undefined,
        headers: {},
        params: {},
        body: undefined,
      };
      bh.result = await this.sdService.nHttpRequest(requestOptions);
      //appendnew_next_sd_tgM4MzN4bn5IsJh6
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_tgM4MzN4bn5IsJh6');
    }
  }

  //appendnew_node

  async errorHandler(bh, e, src) {
    console.error(e);
    bh.error = e;
    bh.errorSource = src;

    if (
      false
      /*appendnew_next_Catch*/
    ) {
      return bh;
    } else {
      throw e;
    }
  }
  //appendnew_flow_api_Catch
}
