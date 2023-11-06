import * as runtime from '@prisma/client/runtime/library';
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result
import { 
    AtLeast,
    Extends,
    Has,
    Or,
    GetScalarType, 
    SortOrder, 
    BatchPayload,
    FieldRef,
    False,
    Keys,
    ExcludeUnderscoreKeys,
    Subset, 
    SelectSubset,
    InputJsonValue,
    JsonNullValueInput,
    JsonFilter,
    StringFilter,
    IntFilter,
    StringFieldUpdateOperationsInput,
    IntFieldUpdateOperationsInput,
    JsonWithAggregatesFilter,
    StringWithAggregatesFilter,
    IntWithAggregatesFilter,
    JsonValue,
    PrismaPromise,
    PickEnumerable,
    TypeMap,
    SubsetIntersection,
    True,
    MaybeTupleToUnion,
    GetHavingFields,
    XOR,


 } from "./utils"

export type Cookie = $Result.DefaultSelection<$CookiePayload>


/**
   * Model Cookie
   */

export type AggregateCookie = {
    _count: CookieCountAggregateOutputType | null
    _avg: CookieAvgAggregateOutputType | null
    _sum: CookieSumAggregateOutputType | null
    _min: CookieMinAggregateOutputType | null
    _max: CookieMaxAggregateOutputType | null
  }

  export type CookieAvgAggregateOutputType = {
    id: number | null
  }

  export type CookieSumAggregateOutputType = {
    id: number | null
  }

  export type CookieMinAggregateOutputType = {
    id: number | null
    domain: string | null
  }

  export type CookieMaxAggregateOutputType = {
    id: number | null
    domain: string | null
  }

  export type CookieCountAggregateOutputType = {
    id: number
    domain: number
    props: number
    groups: number
    _all: number
  }


  export type CookieAvgAggregateInputType = {
    id?: true
  }

  export type CookieSumAggregateInputType = {
    id?: true
  }

  export type CookieMinAggregateInputType = {
    id?: true
    domain?: true
  }

  export type CookieMaxAggregateInputType = {
    id?: true
    domain?: true
  }

  export type CookieCountAggregateInputType = {
    id?: true
    domain?: true
    props?: true
    groups?: true
    _all?: true
  }

  export type CookieAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Cookie to aggregate.
     */
    where?: CookieWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cookies to fetch.
     */
    orderBy?: CookieOrderByWithRelationInput | CookieOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CookieWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cookies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cookies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Cookies
    **/
    _count?: true | CookieCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CookieAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CookieSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CookieMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CookieMaxAggregateInputType
  }

  export type GetCookieAggregateType<T extends CookieAggregateArgs> = {
        [P in keyof T & keyof AggregateCookie]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCookie[P]>
      : GetScalarType<T[P], AggregateCookie[P]>
  }




  export type CookieGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CookieWhereInput
    orderBy?: CookieOrderByWithAggregationInput | CookieOrderByWithAggregationInput[]
    by: CookieScalarFieldEnum[] | CookieScalarFieldEnum
    having?: CookieScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CookieCountAggregateInputType | true
    _avg?: CookieAvgAggregateInputType
    _sum?: CookieSumAggregateInputType
    _min?: CookieMinAggregateInputType
    _max?: CookieMaxAggregateInputType
  }

  export type CookieGroupByOutputType = {
    id: number
    domain: string
    props:  JsonValue
    groups: JsonValue
    _count: CookieCountAggregateOutputType | null
    _avg: CookieAvgAggregateOutputType | null
    _sum: CookieSumAggregateOutputType | null
    _min: CookieMinAggregateOutputType | null
    _max: CookieMaxAggregateOutputType | null
  }

  type GetCookieGroupByPayload<T extends CookieGroupByArgs> = PrismaPromise<
    Array<
      PickEnumerable<CookieGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CookieGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CookieGroupByOutputType[P]>
            : GetScalarType<T[P], CookieGroupByOutputType[P]>
        }
      >
    >


  export type CookieSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    domain?: boolean
    props?: boolean
    groups?: boolean
  }, ExtArgs["result"]["Cookie"]>

  export type CookieSelectScalar = {
    id?: boolean
    domain?: boolean
    props?: boolean
    groups?: boolean
  }


  export type $CookiePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Cookie"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      domain: string
      props: JsonValue
      groups:JsonValue
    }, ExtArgs["result"]["Cookie"]>
    composites: {}
  }


  type CookieGetPayload<S extends boolean | null | undefined | CookieDefaultArgs> = $Result.GetResult<$CookiePayload, S>

  type CookieCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<CookieFindManyArgs, 'select' | 'include'> & {
      select?: CookieCountAggregateInputType | true
    }

  export interface CookieDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: TypeMap<ExtArgs>['model']['Cookie'], meta: { name: 'Cookie' } }
    /**
     * Find zero or one Cookie that matches the filter.
     * @param {CookieFindUniqueArgs} args - Arguments to find a Cookie
     * @example
     * // Get one Cookie
     * const Cookie = await prisma.Cookie.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends CookieFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, CookieFindUniqueArgs<ExtArgs>>
    ): Prisma__CookieClient<$Result.GetResult<$CookiePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Cookie that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {CookieFindUniqueOrThrowArgs} args - Arguments to find a Cookie
     * @example
     * // Get one Cookie
     * const Cookie = await prisma.Cookie.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends CookieFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CookieFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__CookieClient<$Result.GetResult<$CookiePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Cookie that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CookieFindFirstArgs} args - Arguments to find a Cookie
     * @example
     * // Get one Cookie
     * const Cookie = await prisma.Cookie.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends CookieFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, CookieFindFirstArgs<ExtArgs>>
    ): Prisma__CookieClient<$Result.GetResult<$CookiePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Cookie that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CookieFindFirstOrThrowArgs} args - Arguments to find a Cookie
     * @example
     * // Get one Cookie
     * const Cookie = await prisma.Cookie.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends CookieFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CookieFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__CookieClient<$Result.GetResult<$CookiePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Cookies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CookieFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Cookies
     * const Cookies = await prisma.Cookie.findMany()
     * 
     * // Get first 10 Cookies
     * const Cookies = await prisma.Cookie.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const CookieWithIdOnly = await prisma.Cookie.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends CookieFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CookieFindManyArgs<ExtArgs>>
    ): PrismaPromise<$Result.GetResult<$CookiePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Cookie.
     * @param {CookieCreateArgs} args - Arguments to create a Cookie.
     * @example
     * // Create one Cookie
     * const Cookie = await prisma.Cookie.create({
     *   data: {
     *     // ... data to create a Cookie
     *   }
     * })
     * 
    **/
    create<T extends CookieCreateArgs<ExtArgs>>(
      args: SelectSubset<T, CookieCreateArgs<ExtArgs>>
    ): Prisma__CookieClient<$Result.GetResult<$CookiePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Cookies.
     *     @param {CookieCreateManyArgs} args - Arguments to create many Cookies.
     *     @example
     *     // Create many Cookies
     *     const Cookie = await prisma.Cookie.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends CookieCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CookieCreateManyArgs<ExtArgs>>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Cookie.
     * @param {CookieDeleteArgs} args - Arguments to delete one Cookie.
     * @example
     * // Delete one Cookie
     * const Cookie = await prisma.Cookie.delete({
     *   where: {
     *     // ... filter to delete one Cookie
     *   }
     * })
     * 
    **/
    delete<T extends CookieDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, CookieDeleteArgs<ExtArgs>>
    ): Prisma__CookieClient<$Result.GetResult<$CookiePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Cookie.
     * @param {CookieUpdateArgs} args - Arguments to update one Cookie.
     * @example
     * // Update one Cookie
     * const Cookie = await prisma.Cookie.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends CookieUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, CookieUpdateArgs<ExtArgs>>
    ): Prisma__CookieClient<$Result.GetResult<$CookiePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Cookies.
     * @param {CookieDeleteManyArgs} args - Arguments to filter Cookies to delete.
     * @example
     * // Delete a few Cookies
     * const { count } = await prisma.Cookie.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends CookieDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CookieDeleteManyArgs<ExtArgs>>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cookies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CookieUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Cookies
     * const Cookie = await prisma.Cookie.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends CookieUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, CookieUpdateManyArgs<ExtArgs>>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Cookie.
     * @param {CookieUpsertArgs} args - Arguments to update or create a Cookie.
     * @example
     * // Update or create a Cookie
     * const Cookie = await prisma.Cookie.upsert({
     *   create: {
     *     // ... data to create a Cookie
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Cookie we want to update
     *   }
     * })
    **/
    upsert<T extends CookieUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, CookieUpsertArgs<ExtArgs>>
    ): Prisma__CookieClient<$Result.GetResult<$CookiePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Cookies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CookieCountArgs} args - Arguments to filter Cookies to count.
     * @example
     * // Count the number of Cookies
     * const count = await prisma.Cookie.count({
     *   where: {
     *     // ... the filter for the Cookies we want to count
     *   }
     * })
    **/
    count<T extends CookieCountArgs>(
      args?: Subset<T, CookieCountArgs>,
    ): PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CookieCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Cookie.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CookieAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CookieAggregateArgs>(args: Subset<T, CookieAggregateArgs>): PrismaPromise<GetCookieAggregateType<T>>

    /**
     * Group by Cookie.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CookieGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CookieGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CookieGroupByArgs['orderBy'] }
        : { orderBy?: CookieGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CookieGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCookieGroupByPayload<T> : PrismaPromise<InputErrors>
  /**
   * Fields of the Cookie model
   */
  readonly fields: CookieFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Cookie.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CookieClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Cookie model
   */ 
  interface CookieFieldRefs {
    readonly id: FieldRef<"Cookie", 'Int'>
    readonly domain: FieldRef<"Cookie", 'String'>
    readonly props: FieldRef<"Cookie", 'Json'>
    readonly groups: FieldRef<"Cookie", 'Json'>
  }
    

  // Custom InputTypes

  /**
   * Cookie findUnique
   */
  export type CookieFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cookie
     */
    select?: CookieSelect<ExtArgs> | null
    /**
     * Filter, which Cookie to fetch.
     */
    where: CookieWhereUniqueInput
  }


  /**
   * Cookie findUniqueOrThrow
   */
  export type CookieFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cookie
     */
    select?: CookieSelect<ExtArgs> | null
    /**
     * Filter, which Cookie to fetch.
     */
    where: CookieWhereUniqueInput
  }


  /**
   * Cookie findFirst
   */
  export type CookieFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cookie
     */
    select?: CookieSelect<ExtArgs> | null
    /**
     * Filter, which Cookie to fetch.
     */
    where?: CookieWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cookies to fetch.
     */
    orderBy?: CookieOrderByWithRelationInput | CookieOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Cookies.
     */
    cursor?: CookieWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cookies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cookies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Cookies.
     */
    distinct?: CookieScalarFieldEnum | CookieScalarFieldEnum[]
  }


  /**
   * Cookie findFirstOrThrow
   */
  export type CookieFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cookie
     */
    select?: CookieSelect<ExtArgs> | null
    /**
     * Filter, which Cookie to fetch.
     */
    where?: CookieWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cookies to fetch.
     */
    orderBy?: CookieOrderByWithRelationInput | CookieOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Cookies.
     */
    cursor?: CookieWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cookies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cookies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Cookies.
     */
    distinct?: CookieScalarFieldEnum | CookieScalarFieldEnum[]
  }


  /**
   * Cookie findMany
   */
  export type CookieFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cookie
     */
    select?: CookieSelect<ExtArgs> | null
    /**
     * Filter, which Cookies to fetch.
     */
    where?: CookieWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cookies to fetch.
     */
    orderBy?: CookieOrderByWithRelationInput | CookieOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Cookies.
     */
    cursor?: CookieWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cookies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cookies.
     */
    skip?: number
    distinct?: CookieScalarFieldEnum | CookieScalarFieldEnum[]
  }


  /**
   * Cookie create
   */
  export type CookieCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cookie
     */
    select?: CookieSelect<ExtArgs> | null
    /**
     * The data needed to create a Cookie.
     */
    data: XOR<CookieCreateInput, CookieUncheckedCreateInput>
  }


  /**
   * Cookie createMany
   */
  export type CookieCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Cookies.
     */
    data: CookieCreateManyInput | CookieCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Cookie update
   */
  export type CookieUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cookie
     */
    select?: CookieSelect<ExtArgs> | null
    /**
     * The data needed to update a Cookie.
     */
    data: XOR<CookieUpdateInput, CookieUncheckedUpdateInput>
    /**
     * Choose, which Cookie to update.
     */
    where: CookieWhereUniqueInput
  }


  /**
   * Cookie updateMany
   */
  export type CookieUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Cookies.
     */
    data: XOR<CookieUpdateManyMutationInput, CookieUncheckedUpdateManyInput>
    /**
     * Filter which Cookies to update
     */
    where?: CookieWhereInput
  }


  /**
   * Cookie upsert
   */
  export type CookieUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cookie
     */
    select?: CookieSelect<ExtArgs> | null
    /**
     * The filter to search for the Cookie to update in case it exists.
     */
    where: CookieWhereUniqueInput
    /**
     * In case the Cookie found by the `where` argument doesn't exist, create a new Cookie with this data.
     */
    create: XOR<CookieCreateInput, CookieUncheckedCreateInput>
    /**
     * In case the Cookie was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CookieUpdateInput, CookieUncheckedUpdateInput>
  }


  /**
   * Cookie delete
   */
  export type CookieDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cookie
     */
    select?: CookieSelect<ExtArgs> | null
    /**
     * Filter which Cookie to delete.
     */
    where: CookieWhereUniqueInput
  }


  /**
   * Cookie deleteMany
   */
  export type CookieDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Cookies to delete
     */
    where?: CookieWhereInput
  }


  /**
   * Cookie without action
   */
  export type CookieDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cookie
     */
    select?: CookieSelect<ExtArgs> | null
  }

  /**
   * Deep Input Types
   */


  export type CookieWhereInput = {
    AND?: CookieWhereInput | CookieWhereInput[]
    OR?: CookieWhereInput[]
    NOT?: CookieWhereInput | CookieWhereInput[]
    id?: IntFilter<"Cookie"> | number
    domain?: StringFilter<"Cookie"> | string
    props?: JsonFilter<"Cookie">
    groups?: JsonFilter<"Cookie">
  }

  export type CookieOrderByWithRelationInput = {
    id?: SortOrder
    domain?: SortOrder
    props?: SortOrder
    groups?: SortOrder
  }

  export type CookieWhereUniqueInput = AtLeast<{
    id?: number
    domain?: string
    AND?: CookieWhereInput | CookieWhereInput[]
    OR?: CookieWhereInput[]
    NOT?: CookieWhereInput | CookieWhereInput[]
    props?: JsonFilter<"Cookie">
    groups?: JsonFilter<"Cookie">
  }, "id" | "domain">

  export type CookieOrderByWithAggregationInput = {
    id?: SortOrder
    domain?: SortOrder
    props?: SortOrder
    groups?: SortOrder
    _count?: CookieCountOrderByAggregateInput
    _avg?: CookieAvgOrderByAggregateInput
    _max?: CookieMaxOrderByAggregateInput
    _min?: CookieMinOrderByAggregateInput
    _sum?: CookieSumOrderByAggregateInput
  }

  export type CookieScalarWhereWithAggregatesInput = {
    AND?: CookieScalarWhereWithAggregatesInput | CookieScalarWhereWithAggregatesInput[]
    OR?: CookieScalarWhereWithAggregatesInput[]
    NOT?: CookieScalarWhereWithAggregatesInput | CookieScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Cookie"> | number
    domain?: StringWithAggregatesFilter<"Cookie"> | string
    props?: JsonWithAggregatesFilter<"Cookie">
    groups?: JsonWithAggregatesFilter<"Cookie">
  }

  export type CookieCreateInput = {
    domain: string
    props?: JsonNullValueInput | InputJsonValue
    groups?: JsonNullValueInput | InputJsonValue
  }

  export type CookieUncheckedCreateInput = {
    id?: number
    domain: string
    props?: JsonNullValueInput | InputJsonValue
    groups?: JsonNullValueInput | InputJsonValue
  }

  export type CookieUpdateInput = {
    domain?: StringFieldUpdateOperationsInput | string
    props?: JsonNullValueInput | InputJsonValue
    groups?: JsonNullValueInput | InputJsonValue
  }

  export type CookieUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    domain?: StringFieldUpdateOperationsInput | string
    props?: JsonNullValueInput | InputJsonValue
    groups?: JsonNullValueInput | InputJsonValue
  }

  export type CookieCreateManyInput = {
    id?: number
    domain: string
    props?: JsonNullValueInput | InputJsonValue
    groups?: JsonNullValueInput | InputJsonValue
  }

  export type CookieUpdateManyMutationInput = {
    domain?: StringFieldUpdateOperationsInput | string
    props?: JsonNullValueInput | InputJsonValue
    groups?: JsonNullValueInput | InputJsonValue
  }

  export type CookieUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    domain?: StringFieldUpdateOperationsInput | string
    props?: JsonNullValueInput | InputJsonValue
    groups?: JsonNullValueInput | InputJsonValue
  }

  export type CookieCountOrderByAggregateInput = {
    id?: SortOrder
    domain?: SortOrder
    props?: SortOrder
    groups?: SortOrder
  }

  export type CookieAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CookieMaxOrderByAggregateInput = {
    id?: SortOrder
    domain?: SortOrder
  }

  export type CookieMinOrderByAggregateInput = {
    id?: SortOrder
    domain?: SortOrder
  }

  export type CookieSumOrderByAggregateInput = {
    id?: SortOrder
  }

  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use CookieDefaultArgs instead
     */
    export type CookieArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CookieDefaultArgs<ExtArgs>

    export const CookieScalarFieldEnum: {
        id: 'id',
        domain: 'domain',
        props: 'props',
        groups: 'groups'
      };
    
export type CookieScalarFieldEnum = (typeof CookieScalarFieldEnum)[keyof typeof CookieScalarFieldEnum]
    