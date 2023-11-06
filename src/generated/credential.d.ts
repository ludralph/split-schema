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

export type credential = $Result.DefaultSelection<$credentialPayload>


/**
   * Model credential
   */

export type AggregateCredential = {
    _count: CredentialCountAggregateOutputType | null
    _avg: CredentialAvgAggregateOutputType | null
    _sum: CredentialSumAggregateOutputType | null
    _min: CredentialMinAggregateOutputType | null
    _max: CredentialMaxAggregateOutputType | null
  }

  export type CredentialAvgAggregateOutputType = {
    id: number | null
  }

  export type CredentialSumAggregateOutputType = {
    id: number | null
  }

  export type CredentialMinAggregateOutputType = {
    id: number | null
    domain: string | null
  }

  export type CredentialMaxAggregateOutputType = {
    id: number | null
    domain: string | null
  }

  export type CredentialCountAggregateOutputType = {
    id: number
    domain: number
    props: number
    groups: number
    _all: number
  }


  export type CredentialAvgAggregateInputType = {
    id?: true
  }

  export type CredentialSumAggregateInputType = {
    id?: true
  }

  export type CredentialMinAggregateInputType = {
    id?: true
    domain?: true
  }

  export type CredentialMaxAggregateInputType = {
    id?: true
    domain?: true
  }

  export type CredentialCountAggregateInputType = {
    id?: true
    domain?: true
    props?: true
    groups?: true
    _all?: true
  }

  export type CredentialAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which credential to aggregate.
     */
    where?: credentialWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of credentials to fetch.
     */
    orderBy?: credentialOrderByWithRelationInput | credentialOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: credentialWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` credentials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` credentials.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned credentials
    **/
    _count?: true | CredentialCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CredentialAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CredentialSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CredentialMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CredentialMaxAggregateInputType
  }

  export type GetCredentialAggregateType<T extends CredentialAggregateArgs> = {
        [P in keyof T & keyof AggregateCredential]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCredential[P]>
      : GetScalarType<T[P], AggregateCredential[P]>
  }




  export type credentialGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: credentialWhereInput
    orderBy?: credentialOrderByWithAggregationInput | credentialOrderByWithAggregationInput[]
    by: CredentialScalarFieldEnum[] | CredentialScalarFieldEnum
    having?: credentialScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CredentialCountAggregateInputType | true
    _avg?: CredentialAvgAggregateInputType
    _sum?: CredentialSumAggregateInputType
    _min?: CredentialMinAggregateInputType
    _max?: CredentialMaxAggregateInputType
  }

  export type CredentialGroupByOutputType = {
    id: number
    domain: string
    props:  JsonValue
    groups: JsonValue
    _count: CredentialCountAggregateOutputType | null
    _avg: CredentialAvgAggregateOutputType | null
    _sum: CredentialSumAggregateOutputType | null
    _min: CredentialMinAggregateOutputType | null
    _max: CredentialMaxAggregateOutputType | null
  }

  type GetCredentialGroupByPayload<T extends credentialGroupByArgs> = PrismaPromise<
    Array<
      PickEnumerable<CredentialGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CredentialGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CredentialGroupByOutputType[P]>
            : GetScalarType<T[P], CredentialGroupByOutputType[P]>
        }
      >
    >


  export type credentialSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    domain?: boolean
    props?: boolean
    groups?: boolean
  }, ExtArgs["result"]["credential"]>

  export type credentialSelectScalar = {
    id?: boolean
    domain?: boolean
    props?: boolean
    groups?: boolean
  }


  export type $credentialPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "credential"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      domain: string
      props: JsonValue
      groups:JsonValue
    }, ExtArgs["result"]["credential"]>
    composites: {}
  }


  type credentialGetPayload<S extends boolean | null | undefined | credentialDefaultArgs> = $Result.GetResult<$credentialPayload, S>

  type credentialCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<credentialFindManyArgs, 'select' | 'include'> & {
      select?: CredentialCountAggregateInputType | true
    }

  export interface credentialDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: TypeMap<ExtArgs>['model']['credential'], meta: { name: 'credential' } }
    /**
     * Find zero or one Credential that matches the filter.
     * @param {credentialFindUniqueArgs} args - Arguments to find a Credential
     * @example
     * // Get one Credential
     * const credential = await prisma.credential.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends credentialFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, credentialFindUniqueArgs<ExtArgs>>
    ): Prisma__credentialClient<$Result.GetResult<$credentialPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Credential that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {credentialFindUniqueOrThrowArgs} args - Arguments to find a Credential
     * @example
     * // Get one Credential
     * const credential = await prisma.credential.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends credentialFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, credentialFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__credentialClient<$Result.GetResult<$credentialPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Credential that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {credentialFindFirstArgs} args - Arguments to find a Credential
     * @example
     * // Get one Credential
     * const credential = await prisma.credential.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends credentialFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, credentialFindFirstArgs<ExtArgs>>
    ): Prisma__credentialClient<$Result.GetResult<$credentialPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Credential that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {credentialFindFirstOrThrowArgs} args - Arguments to find a Credential
     * @example
     * // Get one Credential
     * const credential = await prisma.credential.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends credentialFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, credentialFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__credentialClient<$Result.GetResult<$credentialPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Credentials that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {credentialFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Credentials
     * const credentials = await prisma.credential.findMany()
     * 
     * // Get first 10 Credentials
     * const credentials = await prisma.credential.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const credentialWithIdOnly = await prisma.credential.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends credentialFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, credentialFindManyArgs<ExtArgs>>
    ): PrismaPromise<$Result.GetResult<$credentialPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Credential.
     * @param {credentialCreateArgs} args - Arguments to create a Credential.
     * @example
     * // Create one Credential
     * const Credential = await prisma.credential.create({
     *   data: {
     *     // ... data to create a Credential
     *   }
     * })
     * 
    **/
    create<T extends credentialCreateArgs<ExtArgs>>(
      args: SelectSubset<T, credentialCreateArgs<ExtArgs>>
    ): Prisma__credentialClient<$Result.GetResult<$credentialPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Credentials.
     *     @param {credentialCreateManyArgs} args - Arguments to create many Credentials.
     *     @example
     *     // Create many Credentials
     *     const credential = await prisma.credential.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends credentialCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, credentialCreateManyArgs<ExtArgs>>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Credential.
     * @param {credentialDeleteArgs} args - Arguments to delete one Credential.
     * @example
     * // Delete one Credential
     * const Credential = await prisma.credential.delete({
     *   where: {
     *     // ... filter to delete one Credential
     *   }
     * })
     * 
    **/
    delete<T extends credentialDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, credentialDeleteArgs<ExtArgs>>
    ): Prisma__credentialClient<$Result.GetResult<$credentialPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Credential.
     * @param {credentialUpdateArgs} args - Arguments to update one Credential.
     * @example
     * // Update one Credential
     * const credential = await prisma.credential.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends credentialUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, credentialUpdateArgs<ExtArgs>>
    ): Prisma__credentialClient<$Result.GetResult<$credentialPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Credentials.
     * @param {credentialDeleteManyArgs} args - Arguments to filter Credentials to delete.
     * @example
     * // Delete a few Credentials
     * const { count } = await prisma.credential.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends credentialDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, credentialDeleteManyArgs<ExtArgs>>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Credentials.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {credentialUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Credentials
     * const credential = await prisma.credential.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends credentialUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, credentialUpdateManyArgs<ExtArgs>>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Credential.
     * @param {credentialUpsertArgs} args - Arguments to update or create a Credential.
     * @example
     * // Update or create a Credential
     * const credential = await prisma.credential.upsert({
     *   create: {
     *     // ... data to create a Credential
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Credential we want to update
     *   }
     * })
    **/
    upsert<T extends credentialUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, credentialUpsertArgs<ExtArgs>>
    ): Prisma__credentialClient<$Result.GetResult<$credentialPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Credentials.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {credentialCountArgs} args - Arguments to filter Credentials to count.
     * @example
     * // Count the number of Credentials
     * const count = await prisma.credential.count({
     *   where: {
     *     // ... the filter for the Credentials we want to count
     *   }
     * })
    **/
    count<T extends credentialCountArgs>(
      args?: Subset<T, credentialCountArgs>,
    ): PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CredentialCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Credential.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CredentialAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CredentialAggregateArgs>(args: Subset<T, CredentialAggregateArgs>): PrismaPromise<GetCredentialAggregateType<T>>

    /**
     * Group by Credential.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {credentialGroupByArgs} args - Group by arguments.
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
      T extends credentialGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: credentialGroupByArgs['orderBy'] }
        : { orderBy?: credentialGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, credentialGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCredentialGroupByPayload<T> : PrismaPromise<InputErrors>
  /**
   * Fields of the credential model
   */
  readonly fields: credentialFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for credential.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__credentialClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends PrismaPromise<T> {
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
   * Fields of the credential model
   */ 
  interface credentialFieldRefs {
    readonly id: FieldRef<"credential", 'Int'>
    readonly domain: FieldRef<"credential", 'String'>
    readonly props: FieldRef<"credential", 'Json'>
    readonly groups: FieldRef<"credential", 'Json'>
  }
    

  // Custom InputTypes

  /**
   * credential findUnique
   */
  export type credentialFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the credential
     */
    select?: credentialSelect<ExtArgs> | null
    /**
     * Filter, which credential to fetch.
     */
    where: credentialWhereUniqueInput
  }


  /**
   * credential findUniqueOrThrow
   */
  export type credentialFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the credential
     */
    select?: credentialSelect<ExtArgs> | null
    /**
     * Filter, which credential to fetch.
     */
    where: credentialWhereUniqueInput
  }


  /**
   * credential findFirst
   */
  export type credentialFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the credential
     */
    select?: credentialSelect<ExtArgs> | null
    /**
     * Filter, which credential to fetch.
     */
    where?: credentialWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of credentials to fetch.
     */
    orderBy?: credentialOrderByWithRelationInput | credentialOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for credentials.
     */
    cursor?: credentialWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` credentials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` credentials.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of credentials.
     */
    distinct?: CredentialScalarFieldEnum | CredentialScalarFieldEnum[]
  }


  /**
   * credential findFirstOrThrow
   */
  export type credentialFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the credential
     */
    select?: credentialSelect<ExtArgs> | null
    /**
     * Filter, which credential to fetch.
     */
    where?: credentialWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of credentials to fetch.
     */
    orderBy?: credentialOrderByWithRelationInput | credentialOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for credentials.
     */
    cursor?: credentialWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` credentials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` credentials.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of credentials.
     */
    distinct?: CredentialScalarFieldEnum | CredentialScalarFieldEnum[]
  }


  /**
   * credential findMany
   */
  export type credentialFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the credential
     */
    select?: credentialSelect<ExtArgs> | null
    /**
     * Filter, which credentials to fetch.
     */
    where?: credentialWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of credentials to fetch.
     */
    orderBy?: credentialOrderByWithRelationInput | credentialOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing credentials.
     */
    cursor?: credentialWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` credentials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` credentials.
     */
    skip?: number
    distinct?: CredentialScalarFieldEnum | CredentialScalarFieldEnum[]
  }


  /**
   * credential create
   */
  export type credentialCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the credential
     */
    select?: credentialSelect<ExtArgs> | null
    /**
     * The data needed to create a credential.
     */
    data: XOR<credentialCreateInput, credentialUncheckedCreateInput>
  }


  /**
   * credential createMany
   */
  export type credentialCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many credentials.
     */
    data: credentialCreateManyInput | credentialCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * credential update
   */
  export type credentialUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the credential
     */
    select?: credentialSelect<ExtArgs> | null
    /**
     * The data needed to update a credential.
     */
    data: XOR<credentialUpdateInput, credentialUncheckedUpdateInput>
    /**
     * Choose, which credential to update.
     */
    where: credentialWhereUniqueInput
  }


  /**
   * credential updateMany
   */
  export type credentialUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update credentials.
     */
    data: XOR<credentialUpdateManyMutationInput, credentialUncheckedUpdateManyInput>
    /**
     * Filter which credentials to update
     */
    where?: credentialWhereInput
  }


  /**
   * credential upsert
   */
  export type credentialUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the credential
     */
    select?: credentialSelect<ExtArgs> | null
    /**
     * The filter to search for the credential to update in case it exists.
     */
    where: credentialWhereUniqueInput
    /**
     * In case the credential found by the `where` argument doesn't exist, create a new credential with this data.
     */
    create: XOR<credentialCreateInput, credentialUncheckedCreateInput>
    /**
     * In case the credential was found with the provided `where` argument, update it with this data.
     */
    update: XOR<credentialUpdateInput, credentialUncheckedUpdateInput>
  }


  /**
   * credential delete
   */
  export type credentialDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the credential
     */
    select?: credentialSelect<ExtArgs> | null
    /**
     * Filter which credential to delete.
     */
    where: credentialWhereUniqueInput
  }


  /**
   * credential deleteMany
   */
  export type credentialDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which credentials to delete
     */
    where?: credentialWhereInput
  }


  /**
   * credential without action
   */
  export type credentialDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the credential
     */
    select?: credentialSelect<ExtArgs> | null
  }

  /**
   * Deep Input Types
   */


  export type credentialWhereInput = {
    AND?: credentialWhereInput | credentialWhereInput[]
    OR?: credentialWhereInput[]
    NOT?: credentialWhereInput | credentialWhereInput[]
    id?: IntFilter<"credential"> | number
    domain?: StringFilter<"credential"> | string
    props?: JsonFilter<"credential">
    groups?: JsonFilter<"credential">
  }

  export type credentialOrderByWithRelationInput = {
    id?: SortOrder
    domain?: SortOrder
    props?: SortOrder
    groups?: SortOrder
  }

  export type credentialWhereUniqueInput = AtLeast<{
    id?: number
    domain?: string
    AND?: credentialWhereInput | credentialWhereInput[]
    OR?: credentialWhereInput[]
    NOT?: credentialWhereInput | credentialWhereInput[]
    props?: JsonFilter<"credential">
    groups?: JsonFilter<"credential">
  }, "id" | "domain">

  export type credentialOrderByWithAggregationInput = {
    id?: SortOrder
    domain?: SortOrder
    props?: SortOrder
    groups?: SortOrder
    _count?: credentialCountOrderByAggregateInput
    _avg?: credentialAvgOrderByAggregateInput
    _max?: credentialMaxOrderByAggregateInput
    _min?: credentialMinOrderByAggregateInput
    _sum?: credentialSumOrderByAggregateInput
  }

  export type credentialScalarWhereWithAggregatesInput = {
    AND?: credentialScalarWhereWithAggregatesInput | credentialScalarWhereWithAggregatesInput[]
    OR?: credentialScalarWhereWithAggregatesInput[]
    NOT?: credentialScalarWhereWithAggregatesInput | credentialScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"credential"> | number
    domain?: StringWithAggregatesFilter<"credential"> | string
    props?: JsonWithAggregatesFilter<"credential">
    groups?: JsonWithAggregatesFilter<"credential">
  }

  export type credentialCreateInput = {
    domain: string
    props?: JsonNullValueInput | InputJsonValue
    groups?: JsonNullValueInput | InputJsonValue
  }

  export type credentialUncheckedCreateInput = {
    id?: number
    domain: string
    props?: JsonNullValueInput | InputJsonValue
    groups?: JsonNullValueInput | InputJsonValue
  }

  export type credentialUpdateInput = {
    domain?: StringFieldUpdateOperationsInput | string
    props?: JsonNullValueInput | InputJsonValue
    groups?: JsonNullValueInput | InputJsonValue
  }

  export type credentialUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    domain?: StringFieldUpdateOperationsInput | string
    props?: JsonNullValueInput | InputJsonValue
    groups?: JsonNullValueInput | InputJsonValue
  }

  export type credentialCreateManyInput = {
    id?: number
    domain: string
    props?: JsonNullValueInput | InputJsonValue
    groups?: JsonNullValueInput | InputJsonValue
  }

  export type credentialUpdateManyMutationInput = {
    domain?: StringFieldUpdateOperationsInput | string
    props?: JsonNullValueInput | InputJsonValue
    groups?: JsonNullValueInput | InputJsonValue
  }

  export type credentialUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    domain?: StringFieldUpdateOperationsInput | string
    props?: JsonNullValueInput | InputJsonValue
    groups?: JsonNullValueInput | InputJsonValue
  }

  export type credentialCountOrderByAggregateInput = {
    id?: SortOrder
    domain?: SortOrder
    props?: SortOrder
    groups?: SortOrder
  }

  export type credentialAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type credentialMaxOrderByAggregateInput = {
    id?: SortOrder
    domain?: SortOrder
  }

  export type credentialMinOrderByAggregateInput = {
    id?: SortOrder
    domain?: SortOrder
  }

  export type credentialSumOrderByAggregateInput = {
    id?: SortOrder
  }

  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use credentialDefaultArgs instead
     */
    export type credentialArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = credentialDefaultArgs<ExtArgs>

    export const CredentialScalarFieldEnum: {
        id: 'id',
        domain: 'domain',
        props: 'props',
        groups: 'groups'
      };
    
export type CredentialScalarFieldEnum = (typeof CredentialScalarFieldEnum)[keyof typeof CredentialScalarFieldEnum]
    