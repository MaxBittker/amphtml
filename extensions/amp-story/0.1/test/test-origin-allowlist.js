/**
 * Copyright 2018 The AMP HTML Authors. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS-IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import {ORIGIN_ALLOWLIST} from '../origin-allowlist';

describes.fakeWin('amp-story origin allowlist', {}, () => {
  it('should not have duplicates', () => {
    let hasDuplicates = false;
    const originList = ORIGIN_ALLOWLIST.reduce((origins, origin) => {
      if (origins.indexOf(origin) >= 0) {
        hasDuplicates = true;
        return origins;
      }

      origins.push(origin);
      return origins;
    }, []);

    expect(
      hasDuplicates,
      'Origin list should be:' +
        `\n\n[\n  '${originList.join("',\n  '")}',\n];\n`
    ).to.be.false;
  });
});
